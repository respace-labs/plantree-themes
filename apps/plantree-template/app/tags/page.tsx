import { genPageMetadata } from 'app/seo'
import tagData from 'app/tag-data.json'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  const { TagListPage } = await import(process.env.NEXT_PUBLIC_THEME!)
  return <TagListPage tagData={tagData} />
}
