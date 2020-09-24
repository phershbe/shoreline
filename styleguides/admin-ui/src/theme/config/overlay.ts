import { SxStyleProp } from 'theme-ui'
import { rgba } from 'polished'

import colors from './colors'
import space from './space'

export default {
  tooltip: {
    backgroundColor: rgba(colors.text, 0.95),
    color: 'background',
    fontSize: 0,
    paddingY: 3,
    paddingX: 6,
    borderRadius: 3,
    transition: 'all 250ms ease-in-out',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'background',
    marginTop: 4,
    paddingX: 9,
    paddingTop: 7,
    paddingBottom: 5,
    width: 18,
    borderRadius: 3,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'muted.2',
    hr: {
      marginY: 5,
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderColor: 'muted.2',
      outlineColor: 'focus',
      width: `calc(100% -${space[7]})`,
      marginX: `-${space[9]}`,
    },
    '> button': {
      paddingX: 0,
      paddingY: 0,
      marginY: 3,
      height: 8,
      color: 'text',
      fontSize: 1,
      border: 'none',
      textTransform: 'initial',
      ':hover': {
        color: 'text',
      },
      width: 'full',
      div: {
        justifyContent: 'flex-start',
      },
      svg: {
        marginLeft: 0,
        marginRight: 5,
      },
    },
  },
} as Record<string, SxStyleProp>
