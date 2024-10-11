import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AboutMe from '../components/AboutMe'
import FindMe from '../components/FindMe'
import Link from '../components/Link'
import { formatDate } from '../lib/utils'
import { Authors, Post } from '../types'

const MAX_DISPLAY = 5

interface Props {
  siteMetadata: any
  posts: Post[]
  authors: Authors[]
}

export function HomePage({ posts = [], authors, siteMetadata }: Props) {
  const author = authors.find((p) => p.slug === 'default') as Authors

  return (
    <div className="text-sm text-slate-800 font-medium tracking-widest">
      <div className="flex flex-col space-y-4 mt-12">
        <AboutMe siteMetadata={siteMetadata} />
        <FindMe siteMetadata={siteMetadata} />
      </div>

      {/* Posts */}
      <div className="mt-12 text-sm text-slate-700 font-medium tracking-widest">
        <p className="text-2xl text-green-400 font-semibold tracking-wider mb-6">
          Posts
        </p>

        <div className="flex flex-col text-sm text-slate-700 font-medium tracking-widest">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <div className="flex">
                <time
                  dateTime={date}
                  className="text-sm text-slate-700 font-medium tracking-normal mr-8"
                >
                  {formatDate(date)}
                </time>
                <Link
                  key={slug}
                  href={`/posts/${slug}`}
                  className="flex items-center justify-between mb-2 underline"
                >
                  <div className="text-sm text-slate-700 font-medium tracking-widest">
                    {title}
                  </div>
                </Link>
              </div>
            )
          })}
        </div>

        {posts.length > MAX_DISPLAY && (
          <Link href="/posts" className="underline hover:text-primary-400">
            All posts &rarr;
          </Link>
        )}
      </div>
    </div>
  )
}
