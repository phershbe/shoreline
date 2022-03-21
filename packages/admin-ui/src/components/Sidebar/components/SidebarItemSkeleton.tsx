import React from 'react'

import { Box } from '../../Box'
import { Skeleton } from '../../Skeleton'
import { Set } from '../../Set'
import { SCALES } from '../consts'

/**
 * The SidebaItem loading state
 */
export function SidebarItemSkeleton() {
  return (
    <Box
      csx={{
        width: SCALES.COLLAPSIBLE_AREA_WIDTH,
        padding: '1.5rem 0.5rem',
      }}
    >
      {Array.from(new Array(2)).map((_, index) => (
        <Set
          key={`sidebar-section-${index}`}
          spacing={1}
          orientation="vertical"
          csx={{
            paddingBottom: 8,
          }}
        >
          <Box
            csx={{
              minHeight: '1rem',
              width: '6rem',
              paddingBottom: '0.8125rem',
            }}
          >
            <Skeleton
              key={`section-title-${index}`}
              csx={{
                height: '1rem',
              }}
            />
          </Box>
          {Array.from(new Array(index % 2 === 0 ? 3 : 5)).map((_, idx) => (
            <Skeleton
              key={`section-item-${2 + idx}`}
              csx={{
                height: '1.5rem',
              }}
            />
          ))}
        </Set>
      ))}
    </Box>
  )
}
