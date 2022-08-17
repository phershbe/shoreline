import React from 'react'
import {
  bgTokens,
  fgTokens,
  borderTokens,
  shadowTokens,
  theme as defaultTheme,
  extractTokenCall,
  textTokens,
  Stack,
  Text,
  tokens as themeTokens,
} from '@vtex/admin-ui'
import { replaceHslForHex, rgbaToHexA } from '../utils'

const getCssValue = (token) =>
  token.split('.').reduce((acc, cur) => acc?.[cur], themeTokens)

const colorFormatter = (token: string) => {
  const color = getCssValue(token)
  const isHsla = /.*hsl|hsla.*/gi.test(color)
  const isRgba = /.*rgba.*/gi.test(color)

  return {
    stringfied: JSON.stringify(color),
    formatted: (
      <Stack>
        {isHsla && <Text>{replaceHslForHex(color)}</Text>}
        {isRgba && <Text>{rgbaToHexA(color)}</Text>}
        <Text>{color}</Text>
      </Stack>
    ),
  }
}

const cssWithColorFormatter = (token: string) => {
  const value = getCssValue(token)

  return replaceHslForHex(value, { keepBothValues: true })
}

const getCssVar = (token: string) => `--admin-ui-${token.replace(/\./g, '-')}`

function createMap(
  prop: string,
  tokenCall: string,
  formatValue = (v: any) => v
) {
  return function map(token: string) {
    const formattedToken = `${tokenCall}.${extractTokenCall(token)}`

    const value = formatValue(formattedToken)
    const cssVar = value?.cssVar ?? getCssVar(formattedToken)

    return {
      token: `$${extractTokenCall(token)}`,
      formattedToken,
      description: '',
      cssVar,
      value,
      type: prop,
      csx: {
        [`${prop}`]: token,
      },
    }
  }
}

export const background = bgTokens.map(
  createMap('background', 'bg', colorFormatter)
)
export const foreground = fgTokens.map(createMap('color', 'fg', colorFormatter))
export const border = borderTokens.map(
  createMap('border', 'border', cssWithColorFormatter)
)
export const shadow = shadowTokens.map(
  createMap('boxShadow', 'shadow', cssWithColorFormatter)
)

export const text = textTokens.map(
  createMap('text', 'text', (token) => {
    const keys = Object.keys(defaultTheme.text.body)
    const cssVar = getCssVar(token)
    const textObject = getCssValue(token)

    return {
      stringfied: JSON.stringify(textObject),
      cssVar: (
        <Stack>
          {keys.map((key, index) => (
            <Text key={index}>{`${key}: ${cssVar}`}</Text>
          ))}
        </Stack>
      ),
      formatted: (
        <Stack>
          {keys.map((key, index) => (
            <Text key={index}>{`${key}: ${textObject[key]}`}</Text>
          ))}
        </Stack>
      ),
    }
  })
)

export const tokens = [
  ...background,
  ...foreground,
  ...border,
  ...shadow,
  ...text,
].map((token, index) => ({
  id: index,
  ...token,
}))
