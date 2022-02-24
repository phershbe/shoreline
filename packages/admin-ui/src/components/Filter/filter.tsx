import type { ReactNode } from 'react'
import React from 'react'
import { IconCaretUp } from '@vtex/phosphor-icons'

import { Button } from '../Button'
import { VisuallyHidden } from '../VisuallyHidden'
import { Set } from '../Set'
import { FilterPopoverFooter, FilterPopover } from './filter-popover'
import { FilterDisclosure } from './filter-disclosure'
import type { FilterItem, UseFilterStateReturn } from './useFilterState'

export function Filter(props: FilterProps) {
  const { state, children, selectedValuesLabel } = props
  const { onClear, onChange, popover, label, labelProps, ref, listBoxProps } =
    state

  return (
    <>
      <VisuallyHidden>
        <div {...labelProps}>{label}</div>
      </VisuallyHidden>
      <FilterDisclosure state={popover} labelProps={labelProps}>
        {label}
        {selectedValuesLabel}
        <IconCaretUp
          csx={{
            transform: `rotate(${popover.visible ? 180 : 0}deg)`,
            marginLeft: '$s',
          }}
        />
      </FilterDisclosure>
      <FilterPopover state={popover} aria-label={label}>
        <Set
          as="ul"
          spacing={5}
          orientation="vertical"
          ref={ref}
          csx={{ margin: '$l', paddingY: '$m' }}
          {...listBoxProps}
        >
          {children}
        </Set>
        <FilterPopoverFooter>
          <Button size="small" variant="adaptative-dark" onClick={onClear}>
            Clear
          </Button>
          <Button size="small" onClick={onChange}>
            Apply
          </Button>
        </FilterPopoverFooter>
      </FilterPopover>
    </>
  )
}

export interface FilterProps {
  state: UseFilterStateReturn<FilterItem>
  children?: ReactNode
  selectedValuesLabel?: ReactNode
}
