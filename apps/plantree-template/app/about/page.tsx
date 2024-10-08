import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default async function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)
  const { AboutLayout } = await import(process.env.NEXT_PUBLIC_THEME!)

  return (
    <AboutLayout content={mainContent}>
      <MDXLayoutRenderer code={author.body.code} />
    </AboutLayout>
  )
}
