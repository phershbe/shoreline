import React from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { ThemeProvider } from '@vtex/admin-core'

import { Card } from './index'

describe('Card tests', () => {
  it('should have overridable styles', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Card data-testid="card" csx={{ bg: 'coral' }}>
          Card text
        </Card>
      </ThemeProvider>
    )

    expect(getByTestId('card')).toHaveStyleRule('background-color', 'coral')
  })

  it('should match snapshot', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Card>Card text</Card>
      </ThemeProvider>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should not have a11y violations', async () => {
    const { container } = render(
      <ThemeProvider>
        <Card>Card text</Card>
      </ThemeProvider>
    )

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
