import type { ReactNode, PropsWithChildren } from 'react'
import React, { useMemo, useCallback, Fragment } from 'react'
import { get } from '@vtex/admin-core'

import type {
  Resolver,
  ResolverContext,
  ResolveCellArgs,
  ResolveHeaderArgs,
  ResolveHeaderReturn,
} from './resolvers/core'
import {
  resolveCell as unstableResolveCell,
  resolveHeader as unstableResolveHeader,
} from './resolvers/core'
import { baseResolvers } from './resolvers/base'
import type { Column, TableDensity, TableDir } from './typings'
import { SelectionProvider } from './resolvers/selection'
import type { UseSortReturn, UseTableSortParams } from './hooks/useTableSort'
import { useTableSort } from './hooks/useTableSort'
import type { TableViewState } from './context'

export function useTableState<T>(
  params: UseTableStateParams<T>,
  resolvers: Record<string, Resolver<T>> | undefined = baseResolvers<T>()
): UseTableStateReturn<T> {
  const {
    columns,
    length = 5,
    items = [],
    sort = {},
    getRowKey = (item: T) =>
      get(item as unknown as Record<string, unknown>, 'id', ''),
    onRowClick,
    density = 'regular',
    dir = 'ltr',
    loading = false,
    empty = false,
    error = false,
    itemsNotFound = false,
  } = params

  const context: ResolverContext = useMemo(
    () => ({
      density,
      loading,
      dir,
      empty,
      error,
      itemsNotFound,
    }),
    [density, loading, dir, empty, error, itemsNotFound]
  )

  const sortState = useTableSort(sort)

  const skeletonCollection = useMemo<T[]>(() => {
    return [...Array(length).keys()].map((id) => {
      const item = columns.reduce((acc, col) => {
        return { ...acc, [col.id]: '__table_skeleton__' }
      }, {})

      return { id, ...item } as unknown as T
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, columns])

  const selectionColumn = useMemo(
    () => columns.find((col) => col.resolver?.type === 'selection'),
    [columns]
  )

  const resolveCell = useCallback(
    (args: ResolverCallee<ResolveCellArgs<T>>) =>
      unstableResolveCell<T>({ ...args, resolvers, context }),
    [resolvers, context]
  )

  const resolveHeader = useCallback(
    (args: ResolverCallee<ResolveHeaderArgs<T>>) =>
      unstableResolveHeader<T>({
        ...args,
        resolvers,
        context,
        sortState,
      }),
    [resolvers, context, sortState]
  )

  const data = useMemo(() => {
    if (context.loading) {
      return skeletonCollection
    }

    if (sortState.by && sortState.order) {
      const column = columns.find((column) => column.id === sortState.by)

      if (column && column.compare) {
        const itemsCopy = items.slice()

        return itemsCopy.sort((a, b) => {
          if (column.compare) {
            return sortState.resolveSorting(column.compare(a, b))
          }

          return 0
        })
      }
    }

    return items
  }, [
    items,
    context.loading,
    skeletonCollection,
    sortState.by,
    sortState.order,
    columns,
  ])

  function Providers(props: PropsWithChildren<unknown>) {
    return selectionColumn ? (
      <SelectionProvider
        items={data}
        mapId={get(selectionColumn, 'resolver.mapId', () => '')}
        isSelected={get(selectionColumn, 'resolver.isSelected', () => false)}
        onSelect={get(selectionColumn, 'resolver.onSelect', () => null)}
      >
        {props.children}
      </SelectionProvider>
    ) : (
      <Fragment>{props.children}</Fragment>
    )
  }

  return {
    skeletonCollection,
    resolveCell,
    resolveHeader,
    data,
    columns,
    Providers,
    sortState,
    context,
    getRowKey,
    onRowClick,
  }
}

export interface UseTableStateParams<T> extends TableViewState {
  /**
   * Table column spec
   */
  columns: Array<Column<T>>
  /**
   * Resolver context
   */
  context?: ResolverContext
  /**
   * HTML Dir
   * @default 'ltr'
   */
  dir?: TableDir
  /**
   * Key extractor
   * @default (item)=>item.id
   */
  getRowKey?: (item: T) => string
  /**
   * Table items
   * @default []
   */
  items?: T[]
  /**
   * Expected items length
   * @default 5
   */
  length?: number
  /**
   * Object used in sort hook
   */
  sort?: UseTableSortParams<T>
  /**
   * Table row height
   * @default regular
   */
  density?: TableDensity
  /**
   * Action to dispatch on a row click
   */
  onRowClick?: (item: T) => void
}

export interface UseTableStateReturn<T> {
  skeletonCollection: T[]
  resolveCell: (args: ResolverCallee<ResolveCellArgs<T>>) => ReactNode
  resolveHeader: (
    args: ResolverCallee<ResolveHeaderArgs<T>>
  ) => ResolveHeaderReturn
  data: T[]
  columns: Array<Column<T>>
  Providers: (props: PropsWithChildren<unknown>) => JSX.Element
  sortState: UseSortReturn
  context: ResolverContext
  getRowKey: (item: T) => string | unknown
  density?: TableDensity
  onRowClick?: (item: T) => void
}

type ResolverCallee<T> = Omit<T, 'resolvers' | 'context' | 'sortState'>
