import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from '@/lib/pliny/mdx-components'
import { coreContent } from '@/lib/pliny/utils/contentlayer'
import { genPageMetadata } from '@/app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default async function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const authorContent = coreContent(author)
  const { AboutLayout } = await import(process.env.NEXT_PUBLIC_THEME!)

  return (
    <AboutLayout author={authorContent}>
      <MDXLayoutRenderer code={author.body.code} />
    </AboutLayout>
  )
}
