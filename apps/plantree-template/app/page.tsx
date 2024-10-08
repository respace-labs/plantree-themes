import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const { HomePage } = await import(process.env.NEXT_PUBLIC_THEME!)

  return <HomePage posts={posts}></HomePage>
}
