import * as React from 'react'
import { useSafeLayoutEffect } from './use-safe-layout-effect'

const _React = { ...React }
// useId is not available in React < 16.8
const useReactId = _React?.useId

/**
 * Generates a unique ID. Uses React's useId if available.
 */
export function useId(defaultId?: string): string | undefined {
  if (useReactId) {
    const reactId = useReactId()

    if (defaultId) return defaultId

    return reactId
  }

  const [id, setId] = React.useState(defaultId)

  useSafeLayoutEffect(() => {
    if (defaultId || id) return
    const random = Math.random().toString(36).substr(2, 6)

    setId(`id-${random}`)
  }, [defaultId, id])

  return defaultId || id
}
