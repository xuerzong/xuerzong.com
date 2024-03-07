'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import { twMerge } from 'tailwind-merge'
import Table from './Table'
import Image from 'next/image'
import Link from './Link'
import Pre from './Pre'
import H2 from './H2'
import H3 from './H3'

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
} as any
interface Props {
  content?: string
  className?: string
}

const MDXComponent: React.FC<Props> = ({ content = '', className }) => {
  const Component = useMDXComponent(content)
  return (
    <article className={twMerge('prose max-w-none dark:prose-invert', className)}>
      <Component components={mdxComponents} />
    </article>
  )
}

export default MDXComponent
