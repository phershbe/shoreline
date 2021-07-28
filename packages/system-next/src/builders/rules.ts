import { get, callOrReturn } from '@vtex/onda-util'

import type { Plugin } from '../plugin'
import { getRules } from '../plugin'

/**
 * Builds rules of all plugins
 * @param theme
 * @param plugins
 */
export function buildRules<Theme extends Record<string, any>>(
  theme: Theme,
  plugins: Array<Plugin<Theme>>
) {
  const rules = plugins
    .map((plugin) => getRules(plugin))
    .reduce(
      (acc, callbackRule) => ({
        ...acc,
        ...callOrReturn(callbackRule, theme),
      }),
      {}
    ) as Record<string, string>

  function findRule(prop: string) {
    const ruleId = prop in rules ? rules[prop] : undefined

    return ruleId ? theme?.[ruleId] : get(theme, prop, {})
  }

  return {
    value: rules,
    exec: findRule,
  }
}
