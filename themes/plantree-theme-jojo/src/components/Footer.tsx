import { ReactNode } from 'react'
import Link from './Link'
import SocialIcon from './social-icons'

interface Props {
  ThemeSwitch: () => ReactNode
  siteMetadata: any
}

export function Footer({ siteMetadata, ThemeSwitch }: Props) {
  return (
    <footer className="mt-auto mb-8">
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}
