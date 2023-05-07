import { Fragment, type PropsWithChildren } from 'react'
import type { Post } from 'contentlayer/generated'
import ScrollTopBtn from '@/components/ScrollTopBtn'
import PostHeader from './header'
import Container from '@/components/Container'

const PostLayout: React.FC<PropsWithChildren<Omit<Post, 'mdx'>>> = ({ children, ...restProps }) => {
  const { title, date, readingTime } = restProps

  return (
    <Container className="pt-24">
      <PostHeader title={title} date={date} readingTime={readingTime} />

      <article id="post" className="prose max-w-none dark:prose-invert mx-auto my-6">
        {children}
      </article>

      <ScrollTopBtn />
    </Container>
  )
}

export default PostLayout
