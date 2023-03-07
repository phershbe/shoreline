import type { ComponentPropsWithoutRef, Ref } from 'react'
import React, { forwardRef } from 'react'
import { cx } from '@vtex/admin-ui-core'
import type { BleedThemeValues } from './bleed.css'
import { bleedInnerChild, bleedTheme } from './bleed.css'

const defaultBleed = '0rem'

export const Bleed = forwardRef(function Bleed(
  props: BleedProps,
  ref: Ref<HTMLDivElement>
) {
  const {
    top = defaultBleed,
    left = defaultBleed,
    bottom = defaultBleed,
    right = defaultBleed,
    className = '',
    children,
    ...htmlProps
  } = props

  return (
    <div
      ref={ref}
      className={cx(bleedTheme({ top, left, bottom, right }), className)}
      {...htmlProps}
    >
      <div className={bleedInnerChild}>{children}</div>
    </div>
  )
})

export type BleedProps = ComponentPropsWithoutRef<'div'> & BleedThemeValues
