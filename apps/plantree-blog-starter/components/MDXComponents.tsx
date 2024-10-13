import TOCInline from '@/lib/pliny/ui/TOCInline'
import Pre from '@/lib/pliny/ui/Pre'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink as any,
  pre: Pre as any,
  table: TableWrapper as any,
}
