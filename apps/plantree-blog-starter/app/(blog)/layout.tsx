import siteMetadata from '@/content/siteMetadata'
import ThemeSwitch from '@/components/ThemeSwitch'
import MobileNav from '@/components/MobileNav'
import { Logo } from '@/components/Logo'
import { WalletConnectButton } from '@/components/WalletConnectButton'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { SiteLayout } = await import(process.env.NEXT_PUBLIC_THEME!)

  return (
    <SiteLayout
      siteMetadata={siteMetadata}
      Logo={Logo}
      ThemeSwitch={ThemeSwitch}
      MobileNav={MobileNav}
      ConnectButton={WalletConnectButton}
    >
      {children}
    </SiteLayout>
  )
}
