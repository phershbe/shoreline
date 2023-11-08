import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import React, { forwardRef } from 'react'
import type { RadioStore } from '@ariakit/react'
import {
  RadioGroup as BaseRadioGroup,
  RadioProvider,
  useRadioStore,
} from '@ariakit/react'
import { Field, FieldLabel, FieldMessage } from '../field'
import { Stack } from '../stack'
import { useId } from '@vtex/shoreline-utils'

export const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
  function Radio(props, ref) {
    const {
      error,
      helpText,
      errorText,
      label,
      children,
      className,
      direction = 'column',
      state,
      id: defaultId,
      ...otherProps
    } = props

    const id = useId(defaultId)
    const stackGap = direction === 'column' ? '$space-4' : '$space-5'

    return (
      <RadioProvider store={state}>
        <Field variant="group" data-sl-radio-group className={className}>
          <FieldLabel htmlFor={id}>{label}</FieldLabel>
          <BaseRadioGroup data-sl-group id={id} ref={ref} {...otherProps}>
            <Stack direction={direction} space={stackGap}>
              {children}
            </Stack>
          </BaseRadioGroup>
          <FieldMessage
            error={error}
            helpText={helpText}
            errorText={errorText}
          />
        </Field>
      </RadioProvider>
    )
  }
)

export interface RadioGroupState {
  value?: string | number | null
  setValue?: ((value: string | number | null) => void) | undefined
  activeId?: string | null
  defaultActiveId?: string | null
  defaultValue?: string | number | null
}

export interface RadioGroupProps extends ComponentPropsWithoutRef<'div'> {
  className?: string
  error?: boolean
  helpText?: string
  errorText?: string
  label: ReactNode
  direction?: 'row' | 'column'
  state?: RadioStore
}

export const useRadioState: (props?: RadioGroupState) => RadioStore =
  useRadioStore
