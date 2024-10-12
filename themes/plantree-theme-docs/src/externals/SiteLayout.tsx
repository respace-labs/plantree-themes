import { ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import SectionContainer from '../components/SectionContainer'
import { Sidebar } from '../components/sidebar'

interface Props {
  siteMetadata: any
  Logo: () => ReactNode
  ThemeSwitch: () => ReactNode
  MobileNav: () => ReactNode
  ConnectButton: () => ReactNode
  children: ReactNode
}

export function SiteLayout({
  children,
  siteMetadata,
  Logo,
  ThemeSwitch,
  MobileNav,
  ConnectButton,
}: Props) {
  return (
    <>
      <Header
        siteMetadata={siteMetadata}
        Logo={Logo}
        ThemeSwitch={ThemeSwitch}
        MobileNav={MobileNav}
        ConnectButton={ConnectButton}
      />

      <div className="flex-1" style={{
        display: 'flex',
        width: '100%',
        flex: '1 0'
      }}>
        <Sidebar siteMetadata={siteMetadata} />

        <SectionContainer>
          <main className="mb-auto">{children}</main>
          <Footer siteMetadata={siteMetadata} />
        </SectionContainer>
      </div>
    </>
  )
}
