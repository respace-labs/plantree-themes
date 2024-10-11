'use client'

import { Badge } from '@/components/ui/badge'
import { useAddress } from '@/hooks/useAddress'
import { useSpace } from '@/hooks/useSpace'
import { SpaceAddress } from './SpaceAddress'

interface Props {}

export function SpaceBasicInfo({}: Props) {
  const address = useAddress()
  const { space } = useSpace()

  return (
    <div className="flex items-center gap-2">
      <img
        alt={space.name || ''}
        className="h-9 w-9 rounded-lg bg-white shadow-sm"
        src={
          space.logo ||
          'https://public.blob.vercel-storage.com/eEZHAoPTOBSYGBE3/JRajRyC-PhBHEinQkupt02jqfKacBVHLWJq7Iy.png'
        }
      />

      <div className="text-lg font-bold">{space.name}</div>
      {/* <SpaceAddress /> */}
      {/* <div className="text-sm text-secondary-foreground">
        {space.description || 'No description yet.'}
      </div> */}
    </div>
  )
}
