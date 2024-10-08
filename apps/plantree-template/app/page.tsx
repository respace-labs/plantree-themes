import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const { HomePage } = await import(process.env.NEXT_PUBLIC_THEME!)

  return (
    <div>
      <HomePage posts={posts}></HomePage>
    </div>
  )
}
