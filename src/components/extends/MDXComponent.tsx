import { useMDXComponent } from 'next-contentlayer/hooks'
import mdxComponents from '@/components/mdx'
import { twMerge } from 'tailwind-merge'

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
