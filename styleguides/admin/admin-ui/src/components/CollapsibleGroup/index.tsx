import React, { Children, ReactNode } from 'react'

import { Overridable } from '../../types'
import { Card } from '../Card'
import { Collapsible, CollapsibleProps, Content, Header } from '../Collapsible'
import { Divider } from '../Divider'

const FIRST_CHILD = 0

/**
 * Component that nests Collapsible's components.
 * Composites: CollapsibleGroup.Item
 *
 * @example
 * ```jsx
 * import { CollapsibleGroup, useCollapsible } from `@vtex/admin-ui`
 *
 * function UseCase() {
 *   const state = useCollapsible()
 *
 *   return (
 *     <CollapsibleGroup>
 *       <CollapsibleGroup.Item state={state}>
 *         <CollapsibleGroup.Item.Header label="Collapsible Label"/>
 *         <CollapsibleGroup.Item.Content>
 *           {content}
 *         </CollapsibleGroup.Item.Content>
 *       </CollapsibleGroup.Item>
 *     </CollapsibleGroup>
 *   )
 * }
 * ```
 */
export function CollapsibleGroup(props: CollapsibleGroupProps) {
  const { children, styleOverrides, ...cardProps } = props

  return (
    <Card styleOverrides={styleOverrides} padding={0} {...cardProps}>
      {Children.map(children, (child, index) => (
        <>
          {index > FIRST_CHILD && <Divider margin={0} />}
          {child}
        </>
      ))}
    </Card>
  )
}

function CollapsibleGroupItem(props: CollapsibleProps) {
  const { styleOverrides, ...collapsibleProps } = props

  return (
    <Collapsible
      styleOverrides={{ borderStyle: 'none', ...styleOverrides }}
      {...collapsibleProps}
    />
  )
}

/**
 * ```
 * CollapsibleGroup.Item header is always visible.
 * Disclosure Button -> always on the left side, and is responsible for controlling the content visibility.
 * Actions Panel -> always on the right side.
 * ```
 */
CollapsibleGroupItem.Header = Header

/**
 * ```
 * CollapsibleGroup.Item content.
 * Can be visible or hidden.
 * ```
 */
CollapsibleGroupItem.Content = Content

/**
 * Same as the `Collapsible` component.
 *
 * @example
 * ```jsx
 * import { CollapsibleGroup, useCollapsible } from `@vtex/admin-ui`
 * const state = useCollapsible()
 * <CollapsibleGroup>
 *   <CollapsibleGroup.Item state={state}>
 *     <CollapsibleGroup.Item.Header label="Title goes here">
 *       {children}
 *     </CollapsibleGroup.Item.Header>
 *     <CollapsibleGroup.Item.Content>{content}</CollapsibleGroup.Item.Content>
 *   </CollapsibleGroup.Item>
 * </CollapsibleGroup>
 * ```
 */
CollapsibleGroup.Item = CollapsibleGroupItem

export interface CollapsibleGroupProps extends Overridable {
  children?: ReactNode
}
