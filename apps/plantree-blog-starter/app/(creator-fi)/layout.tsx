'use client'

import { CreatorFiLayout } from './CreatorFiLayout'
import { StoreProvider } from '@/store'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-50">
      <StoreProvider>
        <CreatorFiLayout>{children}</CreatorFiLayout>
      </StoreProvider>
    </div>
  )
}
