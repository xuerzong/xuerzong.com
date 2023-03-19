import { Fragment, type PropsWithChildren } from 'react'
import type { Post } from 'contentlayer/generated'
import ScrollTopBtn from '@/components/ScrollTopBtn'
import PostHeader from './header'
import Container from '@/components/Container'

const PostLayout: React.FC<PropsWithChildren<Omit<Post, 'mdx'>>> = ({ children, ...restProps }) => {
  const { title, date, readingTime } = restProps

  return (
    <Container>
      <PostHeader title={title} date={date} readingTime={readingTime} />

      <div className="lg:grid lg:gap-8">
        <article id="post" className="prose max-w-none dark:prose-invert mx-auto">
          {children}
        </article>
      </div>

      <ScrollTopBtn />
    </Container>
  )
}

export default PostLayout
