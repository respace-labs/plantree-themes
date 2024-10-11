'use client'

import { precision } from '@/lib/math'
import { useSpaceTokenBalance } from './hooks/useSpaceTokenBalance'
import { Skeleton } from '@/components/ui/skeleton'

export const SpaceTokenBalance = () => {
  const { isLoading, data } = useSpaceTokenBalance()
  if (isLoading) return <Skeleton />

  return (
    <div className="flex items-center gap-1">
      <span className="i-[iconoir--wallet-solid] h-5 w-5 bg-neutral-400"></span>
      <div className="text-sm text-neutral-500">{precision.toDecimal(data!).toFixed(4)}</div>
    </div>
  )
}
