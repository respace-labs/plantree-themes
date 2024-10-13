import React from 'react'
import { KBarSearchProvider } from './KBar'

import type { KBarConfig } from './KBar'

export type SearchConfig = KBarConfig
export interface SearchConfigProps {
  searchConfig: SearchConfig
  children: React.ReactNode
}

/**
 * Command palette like search component - `ctrl-k` to open the palette.
 * Or use the search context to bind toggle to an onOpen event.
 * Currently supports Kbar (local search).
 *
 * To toggle the modal or search from child components, use the search context:
 *
 * For Kbar:
 * ```
 * import { useKBar } from 'kbar'
 * const { query } = useKBar()
 * ```
 *
 * @param {SearchConfig} searchConfig
 * @return {*}
 */
export const SearchProvider = ({ searchConfig, children }: SearchConfigProps) => {
  if (searchConfig && searchConfig.provider) {
    switch (searchConfig.provider) {
      case 'kbar':
        return (
          <KBarSearchProvider kbarConfig={searchConfig.kbarConfig}>{children}</KBarSearchProvider>
        )
      default:
        console.log('No suitable provider found. Please choose from algolia or kbar.')
        return <>{children}</>
    }
  } else {
    return <>{children}</>
  }
}
