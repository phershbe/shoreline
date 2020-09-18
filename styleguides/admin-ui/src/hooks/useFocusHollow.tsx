import { useFocusRing } from '@react-aria/focus'
import { useTheme, get } from '@vtex-components/theme'

/**
 * Hook to add a focus hollow style to your component whenever is focused by the keyboard.
 *
 * @returns `{ focusProps, focusStyles }`
 * - focusProps -> It is responsible to detect if the component is focused or not. You should pass this to your component.
 * - focusStyles -> Focus hollow style
 * @example
 * ```jsx
 * import { useFocusHollow } from `@vtex/admin-ui`
 *
 * function UseCase() {
 *  const { focusStyle, focusProps } = useFocusHollow()
 *
 *  <Button {...focusProps} sx={focusStyle}>...</Button>
 * }
 * ```
 */
export function useFocusHollow() {
  const theme = useTheme()
  const { isFocusVisible, focusProps } = useFocusRing()
  const focusStyles = isFocusVisible
    ? {
        boxShadow: `0rem 0rem 0rem ${get(theme, 'space.2')} ${get(
          theme,
          'colors.focus'
        )}`,
      }
    : {}

  return { focusStyles, focusProps }
}
