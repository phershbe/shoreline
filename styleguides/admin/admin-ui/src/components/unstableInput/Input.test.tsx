import React from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import { unstableInput as Input } from './index'
import { ThemeProvider } from '../../system'
import { IconBook } from '../../icons'

describe('Input tests', () => {
  it('should have overridable styles', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Input
          data-testid="input"
          styleOverrides={{ color: 'blue' }}
          value="Test1"
          readOnly
        />
      </ThemeProvider>
    )

    expect(getByTestId('input')).toHaveStyleRule('color', 'blue')
  })

  it('should match snapshot', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Input value="Test1" readOnly />
        <Input onClear={() => {}} />
        <Input onClear={() => {}} value="Test2" readOnly />
        <Input icon={<IconBook />} />
        <Input icon={<IconBook />} value="Test3" readOnly />
        <Input icon={<IconBook />} onClear={() => {}} />
        <Input icon={<IconBook />} onClear={() => {}} value="Test4" readOnly />
        <Input suffix="Kg" />
        <Input suffix="Kg" value="Test5" readOnly />
        <Input suffix="Kg" onClear={() => {}} />
        <Input suffix="Kg" icon={<IconBook />} />
        <Input suffix="Kg" icon={<IconBook />} onClear={() => {}} />
        <Input
          suffix="Kg"
          icon={<IconBook />}
          onClear={() => {}}
          value="Test6"
          readOnly
        />
      </ThemeProvider>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should not have a11y violations', async () => {
    const { container } = render(
      <ThemeProvider>
        <Input aria-label="raw-input" />
        <Input value="Test1" aria-label="input-value" readOnly />
        <Input onClear={() => {}} aria-label="input-clear" />
        <Input
          onClear={() => {}}
          value="Test2"
          aria-label="input-clear-value"
          readOnly
        />
        <Input icon={<IconBook />} aria-label="input-icon" />
        <Input
          icon={<IconBook />}
          value="Test3"
          aria-label="input-icon-value"
          readOnly
        />
        <Input
          icon={<IconBook />}
          onClear={() => {}}
          aria-label="input-icon-clear"
        />
        <Input
          icon={<IconBook />}
          onClear={() => {}}
          value="Test4"
          aria-label="input-icon-clear-value"
          readOnly
        />
        <Input suffix="Kg" aria-label="input-suffix" />
        <Input
          suffix="Kg"
          aria-label="input-suffix-value"
          value="Test5"
          readOnly
        />
        <Input suffix="Kg" onClear={() => {}} aria-label="input-suffix-clear" />
        <Input suffix="Kg" icon={<IconBook />} aria-label="input-suffix-icon" />
        <Input
          suffix="Kg"
          icon={<IconBook />}
          onClear={() => {}}
          aria-label="input-suffix-icon-clear"
        />
        <Input
          suffix="Kg"
          icon={<IconBook />}
          onClear={() => {}}
          value="Test6"
          aria-label="input-suffix-icon-clear-value"
          readOnly
        />
      </ThemeProvider>
    )

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
