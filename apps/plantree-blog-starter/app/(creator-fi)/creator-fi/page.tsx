import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default async function Page() {
  return (
    <div>
      <div>Creator</div>
    </div>
  )
}
