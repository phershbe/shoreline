import React from 'react'
import { tag } from '@vtex/admin-ui-react'
import type { AnyObject } from '..'

import * as style from './filter.style'

export const AppliedItemsLabel = (props: {
  appliedItems: AnyObject[]
  renderItemLabel: (item: AnyObject) => string
}) => {
  const { appliedItems, renderItemLabel } = props

  const separator = appliedItems.length > 1 ? ',' : ''
  const firstOptionLabel = renderItemLabel(appliedItems[0] || {}) || ''

  const firstSelectedItemLabel = `${firstOptionLabel}${separator}`

  const remainingSelectedItemsCount =
    appliedItems.length > 1 ? `+${appliedItems.length - 1}` : ''

  const appliedValuesLabel = appliedItems.length ? (
    <>
      <span>:</span>
      <tag.span csx={{ color: '$primary' }}>
        <tag.span csx={{ ...style.disclosureStatusLabel, marginX: '$s' }}>
          {firstSelectedItemLabel}
        </tag.span>
        {remainingSelectedItemsCount}
      </tag.span>
    </>
  ) : null

  return appliedValuesLabel
}
