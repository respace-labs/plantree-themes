'use client'

import { useState } from 'react'
import { useSpace } from '@/hooks/useSpace'
import { useAccount } from 'wagmi'
import { BuyPanel } from './SpaceToken/BuyPanel'
import { SellPanel } from './SpaceToken/SellPanel'

enum Direction {
  buy = 1,
  sell = 2,
}

export function Transaction() {
  const { space } = useSpace()
  const { isConnected } = useAccount()
  const [direction, setDirection] = useState<Direction>(Direction.buy)

  const onSwitch = (direction: Direction) => {
    setDirection(direction)
  }

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="rounded-lg">
        <div className="mb-3 flex">
          <button
            onClick={() => onSwitch(Direction.buy)}
            className={`mr-[10px] rounded-[16px] px-[16px] py-[6px] text-[#222222] ${
              direction === Direction.buy ? 'bg-[#22222212]' : ''
            }`}
          >
            Buy
          </button>
          <button
            onClick={() => onSwitch(Direction.sell)}
            className={`rounded-[16px] px-[16px] py-[6px] ${
              direction === Direction.sell ? 'bg-[#22222212]' : ''
            }`}
          >
            Sell
          </button>
        </div>

        <div
          style={{
            display: direction === Direction.buy ? 'block' : 'none',
          }}
        >
          <BuyPanel isConnected={isConnected} />
        </div>

        <div
          style={{
            display: direction === Direction.sell ? 'block' : 'none',
          }}
        >
          <SellPanel isConnected={isConnected} />
        </div>
      </div>
    </div>
  )
}
