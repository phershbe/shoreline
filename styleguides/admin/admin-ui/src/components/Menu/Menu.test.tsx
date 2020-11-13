import React from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import 'mutationobserver-shim'

import { Menu } from './index'
import { ThemeProvider } from '../../system'

global.MutationObserver = window.MutationObserver

describe('Menu tests', () => {
  it('should have overridable styles', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Menu
          visible
          data-testid="menu"
          data-boxtestid="menubox"
          aria-label="menu label"
          styleOverrides={{
            bg: 'black',
          }}
          disclosure={<button>Open</button>}
        >
          <Menu.Item>Download</Menu.Item>
          <Menu.Item>Link to</Menu.Item>
          <Menu.Item>Favorite</Menu.Item>
          <Menu.Separator />
          <Menu.Item>Delete</Menu.Item>
        </Menu>
      </ThemeProvider>
    )

    expect(getByTestId('menubox')).toHaveStyleRule('background-color', 'black')
  })

  it('should match snapshot visible', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Menu
          visible
          data-testid="menu"
          data-boxtestid="menubox"
          aria-label="menu label"
          disclosure={<button>Open</button>}
          baseId="id"
        >
          <Menu.Item>Download</Menu.Item>
          <Menu.Item>Link to</Menu.Item>
          <Menu.Item>Favorite</Menu.Item>
          <Menu.Separator />
          <Menu.Item>Delete</Menu.Item>
        </Menu>
      </ThemeProvider>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should match snapshot hidden', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Menu
          data-testid="menu"
          data-boxtestid="menubox"
          aria-label="menu label"
          disclosure={<button>Open</button>}
          baseId="id"
        >
          <Menu.Item>Download</Menu.Item>
          <Menu.Item>Link to</Menu.Item>
          <Menu.Item>Favorite</Menu.Item>
          <Menu.Separator />
          <Menu.Item>Delete</Menu.Item>
        </Menu>
      </ThemeProvider>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should not have a11y violations', async () => {
    const { container } = render(
      <ThemeProvider>
        <Menu
          visible
          data-testid="menu"
          data-boxtestid="menubox"
          aria-label="menu label"
          disclosure={<button>Open</button>}
        >
          <Menu.Item>Download</Menu.Item>
          <Menu.Item>Link to</Menu.Item>
          <Menu.Item>Favorite</Menu.Item>
          <Menu.Item>Delete</Menu.Item>
        </Menu>
      </ThemeProvider>
    )

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
