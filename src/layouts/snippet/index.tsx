import { Fragment, type PropsWithChildren } from 'react'
import type { Snippet } from 'contentlayer/generated'
import ScrollTopBtn from '@/components/ScrollTopBtn'
import Header from './Header'
import Container from '@/components/Container'

const PostLayout: React.FC<PropsWithChildren<Omit<Snippet, 'mdx'>>> = ({
  children,
  ...restProps
}) => {
  return (
    <Container>
      <Header {...restProps} />
      <div className="lg:grid lg:gap-8">
        <article id="post" className="prose max-w-screen-md dark:prose-invert">
          {children}
        </article>
      </div>

      <ScrollTopBtn />
    </Container>
  )
}

export default PostLayout
