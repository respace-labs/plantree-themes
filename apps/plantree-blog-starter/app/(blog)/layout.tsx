import siteMetadata from '@/content/siteMetadata'
import ThemeSwitch from '@/components/ThemeSwitch'
import MobileNav from '@/components/MobileNav'
import { ConnectButton } from '@/components/ConnectButton'
import { Logo } from '@/components/Logo'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { SiteLayout } = await import(process.env.NEXT_PUBLIC_THEME!)

  return (
    <SiteLayout
      siteMetadata={siteMetadata}
      Logo={Logo}
      ThemeSwitch={ThemeSwitch}
      MobileNav={MobileNav}
      ConnectButton={ConnectButton}
    >
      {children}
    </SiteLayout>
  )
}
