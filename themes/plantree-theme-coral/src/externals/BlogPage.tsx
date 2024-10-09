import { CoreContent } from 'pliny/utils/contentlayer'
import PageTitle from '../components/PageTitle'
import { PostList } from '../components/PostList'
import { PostListWithTag } from '../components/PostListWithTag'
import { Post } from '../types'

interface Props {
  posts: CoreContent<Post>[]
  tagData: Record<string, number>
  title: string
}

export function BlogPage({ posts = [], tagData, title }: Props) {
  return (
    <div className="mt-20 space-y-6">
      <PageTitle>Blog</PageTitle>
      <PostList posts={posts} />
    </div>
  )
}
