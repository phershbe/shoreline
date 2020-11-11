import React, { forwardRef, ReactNode, Ref, useCallback, useState } from 'react'
import { useClassName, SxStyleProp } from '@vtex/admin-ui-system'
import { Input as ReakitInput, InputProps as ReakitInputProps } from 'reakit'
import { IconCancel } from '@vtex/admin-ui-icons'

import { Overridable } from '../../types'
import { Box } from '../Box'

export const unstableInput = forwardRef(function Input(
  props: InputProps,
  ref: Ref<HTMLInputElement>
) {
  const {
    icon,
    suffix,
    onClear,
    styleOverrides,
    id,
    type,
    optionalFeature,
    ...htmlProps
  } = props

  const { value = '' } = props

  const resolvedThemeKey = `components.input.${getVariants({
    icon,
    suffix,
    type,
    onClear,
  })}`

  const inputClassName = useClassName({
    props: {
      styles: { ...styleOverrides },
    },
    themeKey: resolvedThemeKey,
  })

  function renderFeature() {
    const styles = {
      fontSize: 1,
      left: 12,
      paddingTop: 2,
      color: 'muted.0',
      marginBottom: 3,
      position: 'absolute',
      transform: 'translate(0, 16px) scale(1)',
      transformOrigin: 'top left',
      transition: 'all 0.2s ease-out;',
    } as SxStyleProp

    return optionalFeature?.(styles)
  }

  function showPassword() {
    return ''
  }

  return (
    <Box themeKey={`components.input.container${icon ? '-with-icon' : ''}`}>
      {icon && (
        <Box element="span" themeKey="components.input.icon-style">
          {icon}
        </Box>
      )}
      <ReakitInput
        ref={ref}
        type={type}
        className={inputClassName}
        id={id}
        {...htmlProps}
      />
      {renderFeature()}
      {(!!suffix || onClear) && (
        <Box
          styles={{
            right: 0,
            top: 1,
            height: 46,
            paddingRight: 3,
            position: 'absolute',
            display: 'flex',
          }}
        >
          {!!onClear && type !== 'password' && value.toString().length > 0 && (
            <Box
              element="button"
              themeKey="components.input.clear-button-style"
              aria-label={`${id}-clear-button`}
              onClick={onClear}
            >
              <Box>
                <IconCancel size={20} />
              </Box>
            </Box>
          )}
          {!!suffix && (
            <Box element="span" themeKey="components.input.suffix-style">
              {suffix}
            </Box>
          )}
          {type === 'password' && (
            <Box element="span" themeKey="components.input.password-style">
              <Box
                element="button"
                themeKey="components.input.password-button-style"
                aria-label={`${id}-show-password-button`}
                onClick={showPassword}
              >
                <Box>
                  <IconCancel size={20} />
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </Box>
  )
})

function getVariants({
  icon,
  suffix,
  type,
  onClear,
}: Pick<InputProps, 'icon' | 'suffix' | 'type' | 'onClear'>) {
  if (!icon && !suffix && !type && !onClear) {
    return 'default'
  }

  if (type) {
    return `with${type ? '-type' : ''}`
  }

  return `with${icon ? '-icon' : ''}${suffix ? '-suffix' : ''}${
    onClear ? '-clear' : ''
  }`
}

export function useInputState(): InputStateReturn {
  const [value, setValue] = useState('')

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  )

  const onClear = useCallback(() => setValue(''), [])

  return { value, setValue, onChange, onClear }
}

export interface InputStateReturn {
  /** onClear input */
  onClear: () => void
  /** onChange input event */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  /** Input value */
  value: string
  /** Set input value state function */
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export interface InputProps extends Omit<ReakitInputProps, 'ref'>, Overridable {
  /** Input Icon */
  icon?: ReactNode
  /** Input Suffix */
  suffix?: string
  /** Input Type */
  type?: string
  /** onClear input */
  onClear?: () => void
  /**
   * Render an optional feature
   */
  optionalFeature?: (styles: SxStyleProp) => void
}
