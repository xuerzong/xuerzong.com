import Table from './Table'
import Image from 'next/image'
import Link from './Link'
import Pre from './Pre'
import H2 from './H2'
import H3 from './H3'
import type { MDXComponents } from '@mdx-js/react/lib'

const mdxComponents = {
  a: Link,
  pre: Pre,
  Image,
  table: Table,
  h2: H2,
  h3: H3,
  tr: Table.Tr,
  th: Table.Th,
  td: Table.Td,
} as MDXComponents

export default mdxComponents
