import React, { forwardRef } from 'react'
import type { ComponentPropsWithoutRef, Ref } from 'react'
import { cx } from '@vtex/admin-ui-core'

import { useMessageFormatter } from '../i18n'
import { messages } from './form-control.i18n'
import { labelTheme } from './form-control.css'

export const FormControlLabel = forwardRef(function FormControlLabel(
  props: LabelProps,
  ref: Ref<HTMLLabelElement>
) {
  const { className = '', children, optional = false, ...labelProps } = props

  const formatMessage = useMessageFormatter(messages.formControl)

  return (
    <label ref={ref} className={cx(labelTheme, className)} {...labelProps}>
      {children} {optional ? `(${formatMessage('optional')})` : ''}
    </label>
  )
})

export type LabelProps = ComponentPropsWithoutRef<'label'> & {
  optional?: boolean
}
