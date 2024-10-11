import { ReactNode } from 'react'
import { cn } from '../lib/utils'
import { ClientOnly } from './ClientOnly'
import Link from './Link'
import { SearchButton } from './SearchButton'

const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: '/posts', title: 'Blog' },
  { href: '/tags', title: 'Tags' },
  { href: '/creator-fi', title: 'CreatorFi' },
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
  console.log(siteMetadata)

  return (
    <header
      className={cn(
        'flex items-center w-ful dark:bg-gray-950  justify-between py-4 h-20',
        siteMetadata.stickyNav && 'sticky top-0 z-50',
      )}
    >
      <div className="flex justify-between">
        <Logo />
        <div className="ml-4">
          <p className="text-2xl font-bold text-gray-700">
            {siteMetadata.headerTitle}
          </p>

          <div className=" ">
            <div className="flex">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div>
        <SearchButton siteMetadata={siteMetadata} />
      </div> */}

      <div>
        {ConnectButton && (
          <ClientOnly>
            <ConnectButton />
          </ClientOnly>
        )}
      </div>
    </header>
  )
}
