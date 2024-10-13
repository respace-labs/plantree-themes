import { sortPosts, allCoreContent } from '@/lib/pliny/utils/contentlayer'
import siteMetadata from '@/content/siteMetadata'
import { Authors, allAuthors } from 'contentlayer/generated'
import { allBlogs } from 'contentlayer/generated'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const { HomePage } = await import(process.env.NEXT_PUBLIC_THEME!)
  return <HomePage posts={posts} authors={allAuthors} siteMetadata={siteMetadata}></HomePage>
}
