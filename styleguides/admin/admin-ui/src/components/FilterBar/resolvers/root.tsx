import { ReactNode } from 'react'
import invariant from 'tiny-invariant'

import { createResolver, ResolverRenderProps } from './core'

export function rootResolver<T>() {
  return createResolver<T, 'root', RootResolver<T>>({
    value: function RootResolver({ statement, index, handleValueChange }) {
      const { filter } = statement

      const { resolver } = filter

      invariant(
        resolver,
        'Resolver is required while using the root resolver on FilterBar'
      )

      const render = resolver.render

      return render({
        data: null,
        statement,
        index,
        handleValueChange,
      })
    },
  })
}

export type RootResolver<T> = {
  type: 'root'
  render: (props: ResolverRenderProps<T, null>) => ReactNode
}
