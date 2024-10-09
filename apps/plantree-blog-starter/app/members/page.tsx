import { genPageMetadata } from 'app/seo'
import { MemberList } from '@/components/MemberList'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return <MemberList />
}
