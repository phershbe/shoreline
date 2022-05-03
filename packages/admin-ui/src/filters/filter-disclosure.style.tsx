import type { StyleProp } from '@vtex/admin-ui-core'
import * as buttonStyle from '../button/button.style'

const css = (csx: StyleProp) => csx

export const baseline = css({
  ...buttonStyle.buttonStyle,
  ...buttonStyle.variants({ size: 'normal' }),
  marginRight: '$s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  text: '$action2',
  bg: '$action.neutral.secondary',
  color: '$secondary',
  padding: '$s',
  ':hover': {
    bg: '$action.neutral.secondaryHover',
    color: '$secondary',
  },
  ':active': {
    bg: '$action.neutral.secondaryPressed',
    color: '$secondary',
  },
  svg: {
    marginLeft: '$xs',
  },
})

export const caretIcon = (isOpen: boolean) =>
  css({
    transform: `rotate(${isOpen ? 0 : 180}deg)`,
    marginLeft: '$s',
  })
