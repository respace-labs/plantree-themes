import { ReactNode } from 'react'
import { ClientOnly } from './ClientOnly'
import Link from './Link'
import { SearchButton } from './SearchButton'

const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: '/posts', title: 'Blog' },
  { href: '/tags', title: 'Tags' },
  { href: '/about', title: 'About' },
  { href: '/members', title: 'Members' },
]

interface Props {
  siteMetadata: any
  Logo: () => ReactNode
  ThemeSwitch: () => ReactNode
  MobileNav: () => ReactNode
  ConnectButton: () => ReactNode
}

export const Header = ({
  siteMetadata,
  Logo,
  ThemeSwitch,
  MobileNav,
  ConnectButton,
}: Props) => {
  let headerClass =
    'flex items-center w-full bg-sky-800 dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <div className="flex">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
          </div>
        </Link>

        <div>
          <div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>

          <div className=" no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400 border-r"
                >
                  {link.title}
                </Link>
              ))}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <SearchButton siteMetadata={siteMetadata} />
        {ThemeSwitch && <ThemeSwitch />}
        {MobileNav && <MobileNav />}
        {ConnectButton && (
          <ClientOnly>
            <ConnectButton />
          </ClientOnly>
        )}
      </div>
    </header>
  )
}