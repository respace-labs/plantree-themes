import { Button } from '@/components/ui/button'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default async function Page() {
  return (
    <div className="p-20">
      <div>Creator</div>
      <Button>Click</Button>
    </div>
  )
}
