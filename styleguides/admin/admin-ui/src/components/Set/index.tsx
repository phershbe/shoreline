import { ReactNode } from 'react'
import {
  useResponsiveValue,
  ResponsiveValue,
  createComponent,
} from '@vtex/admin-core'

import { SystemComponent } from '../../types'
import { Flex, FlexProps } from '@vtex/admin-primitives'

/**
 * Component used to display a set of components that are spaced evenly.
 */
export const Set = createComponent(Flex, useSet)

export function useSet(props: SetProps): FlexProps<'div'> {
  const {
    orientation = 'horizontal',
    fluid = false,
    spacing = 1,
    align = 'start',
    csx,
    ...layoutProps
  } = props

  const currentOrientation = useResponsiveValue(orientation)
  const currentAlign = useResponsiveValue(align)
  const isVertical = currentOrientation === 'vertical'

  const childrenSpacing = {
    horizontal: {
      '> *:not(:first-child)': {
        marginLeft: spacing,
      },
    },
    vertical: {
      '> *:not(:last-child)': {
        marginBottom: spacing,
      },
    },
  }[currentOrientation]

  return {
    direction: isVertical ? 'column' : 'row',
    align: fluid ? 'unset' : isVertical ? currentAlign : 'center',
    justify: fluid ? 'unset' : isVertical ? 'unset' : currentAlign,
    csx: {
      ...childrenSpacing,
      ...csx,
    },
    ...layoutProps,
  }
}

export interface SetProps extends SystemComponent {
  /** component children */
  children?: ReactNode
  /**
   * orientation of items
   * @default vertical
   */
  orientation?: ResponsiveValue<'vertical' | 'horizontal'>
  /**
   * if the items should grow in width to match the container
   * @default false
   */
  fluid?: boolean
  /**
   * space between items
   * @default 0
   */
  spacing?: ResponsiveValue<number>
  /**
   * items alignment
   * @default start
   */
  align?: ResponsiveValue<'start' | 'end'>
  /**
   * optional themeKey
   */
  themeKey?: string
}
