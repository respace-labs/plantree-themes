'use client'

import { usePathname } from 'next/navigation'
import { cn } from '../lib/utils'
import { Link } from './Link'

interface Props {
  siteMetadata: any
}

export const Sidebar = ({ siteMetadata }: Props) => {
  const pathname = usePathname()
  console.log('========pathname:', pathname)

  return (
    <div className="w-[280px] bg-slate-100 h-[100vh] px-3 hidden md:block">
      <div className="text-3xl font-bold">sidebar</div>
      <div className="grid gap-2">
        <Link
          href="/blog/new-features-in-v1"
          className={cn(
            pathname === '/blog/new-features-in-v1' && 'text-primary-500',
          )}
        >
          new-features-in-v1
        </Link>
        <Link
          href="/blog/introducing-tailwind-nextjs-starter-blog"
          className={cn(
            pathname === '/blog/introducing-tailwind-nextjs-starter-blog' &&
              'text-primary-500',
          )}
        >
          introducing-tailwind-nextjs-starter-blog
        </Link>
      </div>
    </div>
  )
}
