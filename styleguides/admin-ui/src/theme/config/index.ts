import layout from './layout'
import colors from './colors'
import space from './space'
import sizes from './sizes'
// components
import buttons from './buttons'
import text from './text'
import toggle from './toggle'
import avatar from './avatar'
import overlay from './overlay'
import checkbox from './checkbox'
import divider from './divider'
import controlGroup from './controlGroup'
import radio from './radio'

export const theme = {
  ...layout,
  space,
  sizes,
  colors,
  buttons,
  avatar,
  overlay,
  divider,
  forms: {
    ...controlGroup,
    ...toggle,
    ...checkbox,
    ...radio,
  },
  text,
}

export type FontSizes = '0' | '1' | '2' | '3' | '4'
export type BorderWidths = '0' | '1' | '2' | '3'
export type BorderRadius = '0' | '1' | '2' | '3' | 'full'
export type FontVariation = keyof typeof theme.fontVariation
export type LineHeights = keyof typeof theme.lineHeights
export type ZIndexes = 'under' | 'plain' | 'over' | '1' | '2' | '3' | '4' | '5'

export type Space =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'

export type Sizes =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '5xl'
  | '6xl'
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '2/4'
  | '3/4'
  | '1/5'
  | '2/5'
  | '3/5'
  | '4/5'
  | '1/6'
  | '2/6'
  | '3/6'
  | '4/6'
  | '5/6'
  | '1/12'
  | '2/12'
  | '3/12'
  | '4/12'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12'
  | 'full'
  | 'screenHeight'
  | 'screenWidth'

export type AdminTheme = typeof theme
