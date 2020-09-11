import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Box } from '../Box'
import { Text, TextProps } from './index'

export default {
  title: 'beta/Text',
  component: Text,
  parameters: {
    jest: 'Text.test.tsx',
  },
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Playground = Template.bind({})
Playground.args = {
  children: 'Admin UI Text',
}

export const As = () => (
  <ol>
    <Text variant="headline" as="li">
      Headline
    </Text>
    <Text variant="subtitle" as="li">
      Subtitle
    </Text>
  </ol>
)

export const FontSx = () => (
  <Text
    variant="highlight"
    sx={{
      width: '1/3',
      textAlign: 'justify',
    }}
  >
    “All parts should go together without forcing. You must remember that the
    parts you are reassembling were disassembled by you. Therefore, if you can’t
    get them together again, there must be a reason. By all means, do not use a
    hammer.” —{' '}
    <Text variant="small" as="span">
      IBM Manual, 1925
    </Text>
  </Text>
)

export const NativeElements = () => (
  <Box sx={{ width: 21 }}>
    <h1>Heading one</h1>
    <h2>Heading two</h2>
    <h3>Heading three</h3>
    <h4>Heading four</h4>
    <h5>Heading five</h5>
    <h6>Heading six</h6>
    <p>
      Expand your market reach and reduce overhead with an ecommerce
      marketplace.Leverage a collaborative commerce platform with native
      marketplace and distributed order management capabilities built-in for
      rapid time to revenue.
    </p>
  </Box>
)
