'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useQuerySpace, useSpace } from '@/hooks/useSpace'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAccount } from 'wagmi'
import { SpaceBasicInfo } from './SpaceBasicInfo'
import { SpaceStats } from './SpaceStats'

interface Props {}

export function SpaceNav({}: Props) {
  const pathname = usePathname()
  const { space } = useSpace()

  if (!space) return null

  const Paths = {
    about: `/creator-fi`,
    members: `/creator-fi/members`,
    plans: `/creator-fi/plans`,
    shares: `/creator-fi/contributors`,
    subscriptionRecords: `/creator-fi/subscription-records`,
    funding: `/creator-fi/funding`,
    staking: `/creator-fi/staking`,
  }

  const linkClassName = (path: string) =>
    cn(
      'inline-flex item-center justify-center py-1.5 border-b-2 px-3 -mb-[1px] border-transparent',
      path === pathname && 'border-black'
    )

  return (
    <div className="flex justify-center">
      <Link href={Paths.about} className={linkClassName(Paths.about)}>
        About
      </Link>

      <Link href={Paths.members} className={linkClassName(Paths.members)}>
        Members
      </Link>

      <Link href={Paths.plans} className={linkClassName(Paths.plans)}>
        Plans
      </Link>

      <Link href={Paths.shares} className={linkClassName(Paths.shares)}>
        Shares
      </Link>

      <Link href={Paths.subscriptionRecords} className={linkClassName(Paths.subscriptionRecords)}>
        Activities
      </Link>

      <Link href={Paths.staking} className={linkClassName(Paths.staking)}>
        Staking
      </Link>
    </div>
  )
}
