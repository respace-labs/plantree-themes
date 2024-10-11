'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useEthBalance } from '@/hooks/useEthBalance'

export const EthBalance = () => {
  const { ethBalance } = useEthBalance()
  if (!ethBalance.valueDecimal) return <Skeleton />
  return (
    <div className="flex items-center gap-1">
      <span className="i-[iconoir--wallet-solid] h-5 w-5 bg-neutral-400"></span>
      <div className="text-sm text-neutral-500">{ethBalance.valueFormatted}</div>
    </div>
  )
}
