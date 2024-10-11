'use client'

import { useEffect, useState } from 'react'
import { WalletConnectButton } from '@/components/WalletConnectButton'
import { cn } from '@/lib/utils'
import { useAccount } from 'wagmi'
import { ProfilePopover } from './ProfilePopover'

interface Props {}

export function Profile({}: Props) {
  const { isConnected, address } = useAccount()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  if (!isConnected) {
    return <WalletConnectButton className={cn('rounded-full')} />
  }
  return <ProfilePopover />
}
