import { createPlugin, buildAliases } from '../../index'

describe('aliases builder', () => {
  const theme = {
    colors: {
      primary: 'blue',
      text: 'white',
    },
    fontSettings: {
      regular: '"wght" 92',
    },
  }

  const plugin = createPlugin({
    name: 'onda-plugin-tst',
    namespaces: ['colors', 'fontSettings'],
    aliases: {
      c: 'color',
      bg: 'backgroundColor',
      fvs: 'fontVariationSettings',
    },
  })

  const instance = buildAliases(theme, [plugin])

  it('should not produce side effects on the theme', () => {
    expect(theme).toStrictEqual({
      colors: {
        primary: 'blue',
        text: 'white',
      },
      fontSettings: {
        regular: '"wght" 92',
      },
    })
  })

  it('should be able to alias style properties', () => {
    expect(instance.exec('c')).toEqual('color')
    expect(instance.exec('bg')).toEqual('backgroundColor')
    expect(instance.exec('fvs')).toEqual('fontVariationSettings')
  })
})
