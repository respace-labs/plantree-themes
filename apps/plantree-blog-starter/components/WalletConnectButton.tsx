'use client'

import { Button, ButtonProps } from '@/components/ui/button'
import { useAppKit } from '@reown/appkit/react'
import { useAccount } from 'wagmi'
import { UserProfile } from './UserProfile'

interface Props extends ButtonProps {}

export const WalletConnectButton = (props: Props) => {
  const { open } = useAppKit()
  const { isConnected, status, isConnecting } = useAccount()

  async function onOpen() {
    await open()
  }

  function onClick() {
    onOpen()
  }

  if (isConnected) {
    return <UserProfile />
  }

  return (
    <Button onClick={onClick} {...props}>
      {props.children ? props.children : 'Connect'}
    </Button>
  )
}
