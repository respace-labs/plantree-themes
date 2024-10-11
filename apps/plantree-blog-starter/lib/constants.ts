import { Address } from 'viem'

export const SECONDS_PER_MONTH = BigInt(24 * 60 * 60 * 30) // 30 days
export const SECONDS_PER_DAY = BigInt(24 * 60 * 60) // 1 days

export const SPACE_ID = process.env.NEXT_PUBLIC_SPACE_ID as Address

export const RESPACE_BASE_URI = process.env.NEXT_PUBLIC_RESPACE_BASE_URI!

export const IPFS_GATEWAY = 'https://ipfs-gateway.spaceprotocol.xyz'

export enum SubscriptionType {
  SUBSCRIBE = 'SUBSCRIBE',
  UNSUBSCRIBE = 'UNSUBSCRIBE',
}

export const editorDefaultValue = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: '',
        },
      ],
    },
  ],
}
