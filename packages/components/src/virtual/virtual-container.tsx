import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import React, { Fragment, cloneElement } from 'react'
import { forwardRef } from '@vtex/shoreline-utils'
import type { UseVirtualizerModelReturn } from './useVirtualizerModel'

export const VirtualContainer = forwardRef<
  HTMLDivElement,
  VirtualContainerProps
>(function VirtualContainer(props, ref) {
  const { children, virtualizer, style: defaultStyle, ...otherProps } = props

  const { virtualItems, measure, dynamic } = virtualizer

  const start = virtualItems[0]?.start ?? 0

  return (
    <div
      ref={ref}
      data-sl-virtual-container
      data-sl-virtual-dynamic={dynamic}
      style={
        {
          '--sl-virtual-item-start': `${start}px`,
          ...defaultStyle,
        } as any
      }
      {...otherProps}
    >
      {virtualItems.map((virtualRow) => {
        return (
          <Fragment key={virtualRow.key}>
            {cloneElement(children as any, {
              ...virtualRow,
              dynamic,
              ref: measure,
            })}
          </Fragment>
        )
      })}
    </div>
  )
})

export interface VirtualContainerProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
  virtualizer: UseVirtualizerModelReturn
}
