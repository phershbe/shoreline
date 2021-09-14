import React, { useState } from 'react'
import type { Meta } from '@storybook/react'
import {
  IconFavorite,
  IconLink,
  IconImport,
  IconDelete,
  IconShippingTruck,
} from '@vtex/admin-ui-icons'

import { Menu } from './components/Menu'
import {
  useMenuState,
  MenuList,
  MenuButton,
  MenuItem,
  MenuSeparator,
} from './index'

import { Button } from '../Button'
import { Set } from '../Set'

export default {
  title: 'admin-ui/Menu',
  component: Menu,
} as Meta

export const Playground = () => {
  const state = useMenuState()

  return (
    <Menu state={state} hideOnClick>
      <MenuButton display="menu" />
      <MenuList aria-label="Menu">
        <MenuItem icon={<IconShippingTruck />}>Download</MenuItem>
        <MenuItem icon={<IconLink />}>Link to</MenuItem>
        <MenuItem icon={<IconFavorite />}>Favorite</MenuItem>
        <MenuSeparator />
        <MenuItem icon={<IconDelete />}>Delete</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const InitallyVisible = () => {
  const state = useMenuState({
    visible: true,
  })

  return (
    <Menu state={state} hideOnClick>
      <MenuButton display="menu" />
      <MenuList aria-label="Menu">
        <MenuItem icon={<IconShippingTruck />}>Download</MenuItem>
        <MenuItem icon={<IconLink />}>Link to</MenuItem>
        <MenuItem icon={<IconFavorite />}>Favorite</MenuItem>
        <MenuSeparator />
        <MenuItem icon={<IconDelete />} dangerous>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export const WithConstraint = () => {
  const [canDownload, setCanDownload] = useState(false)

  const state = useMenuState({
    orientation: 'vertical',
    loop: true,
    placement: 'bottom-start',
  })

  return (
    <Set>
      <Button onClick={() => setCanDownload((d) => !d)}>
        {canDownload ? 'Cannot' : 'Can'} download
      </Button>
      <Menu state={state}>
        <MenuButton display="actions" variant="secondary">
          Post options
        </MenuButton>
        <MenuList aria-label="Menu">
          {canDownload && <MenuItem icon={<IconImport />}>Download</MenuItem>}
          <MenuItem icon={<IconLink />}>Link to</MenuItem>
          <MenuItem icon={<IconFavorite />}>Favorite</MenuItem>
          <MenuItem icon={<IconDelete />}>Delete</MenuItem>
        </MenuList>
      </Menu>
    </Set>
  )
}
