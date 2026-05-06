import { Block } from 'notion-types'
import { defaultMapImageUrl } from 'notion-utils'

import { defaultPageCover, defaultPageIcon } from './config'

const localPageIconUrl = '/favicon-192x192.png?v=20260506'

export const mapImageUrl = (url: string, block: Block) => {
  if (url?.startsWith('notion://custom_emoji/')) {
    return localPageIconUrl
  }

  if (url === defaultPageCover || url === defaultPageIcon) {
    return url
  }

  return defaultMapImageUrl(url, block)
}
