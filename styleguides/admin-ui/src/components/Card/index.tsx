import React, { Ref } from 'react'
import { forwardRef } from '@vtex-components/utils'
import { SxStyleProp } from 'theme-ui'

import { Box } from '../Box'

export const Card = forwardRef(
  (
    { children, sx }: React.PropsWithChildren<CardProps>,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <Box
        sx={{
          padding: 13,
          backgroundColor: 'background',
          border: 'solid',
          borderColor: 'muted.3',
          borderWidth: 1,
          borderRadius: 3,
          ...sx,
        }}
        ref={ref}
      >
        {children}
      </Box>
    )
  }
)
export interface CardProps {
  /** ThemeUI style props */
  sx: SxStyleProp
}
