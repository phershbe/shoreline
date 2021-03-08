/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType, ReactElement } from 'react'
import * as CSS from 'csstype'
import { createComponent, omit, pick, ResponsiveValue } from '@vtex/admin-core'

import { GridItem } from './Item'
import { Primitive, PrimitiveProps } from '../Primitive'
import { renameKeys } from '../util'

/**
 * Grid default element
 */
const defaultElement = 'div'

const _Grid: <E extends ElementType = typeof defaultElement>(
  props: GridProps<E>
) => ReactElement | null = createComponent(Primitive, useGrid)

export const Grid = Object.assign(_Grid, { Item: GridItem })

export function useGrid(props: GridProps) {
  const propertyMap = {
    gap: 'gridGap',
    rowGap: 'gridRowGap',
    columnGap: 'gridColumnGap',
    templateAreas: 'gridTemplateAreas',
    templateRows: 'gridTemplateRows',
    templateColumns: 'gridTemplateColumns',
  }

  const { csx, templateAreas, ...boxProps } = props

  const resolvedAreas = templateAreas?.map((value) => `"${value}"`).join(' ')
  const cssProps = Object.keys(propertyMap)
  const cssPropsStyle = renameKeys(propertyMap, {
    templateAreas: resolvedAreas,
    ...pick(boxProps, cssProps),
  })

  return {
    csx: { display: 'grid', ...cssPropsStyle, ...csx },
    ...omit(boxProps, cssProps),
  }
}

Grid.Item = GridItem

export { GridItem }

export interface GridOwnProps {
  /** Shorthand for CSS gridGap property */
  gap?: ResponsiveValue<CSS.Property.GridGap>
  /** Shorthand for CSS gridRowGap property */
  rowGap?: ResponsiveValue<CSS.Property.GridRowGap>
  /** Shorthand for CSS gridColumnGap property */
  columnGap?: ResponsiveValue<CSS.Property.GridColumnGap>
  /** Shorthand for CSS gridTemplateAreas property */
  templateAreas?: string[]
  /** Shorthand for CSS gridTemplateRows property */
  templateRows?: ResponsiveValue<CSS.Property.GridTemplateRows>
  /** Shorthand for CSS gridTemplateColumns property */
  templateColumns?: ResponsiveValue<CSS.Property.GridTemplateColumns>
}

export type GridProps<E extends ElementType = ElementType> = GridOwnProps &
  PrimitiveProps<E>
