import { type PropsWithChildren } from 'react'
import type { Post } from 'contentlayer/generated'
import ScrollTopBtn from '@/components/ScrollTopBtn'
import Toc from '@/components/extends/Toc'
import PostHeader from './header'
import Container from '@/components/Container'

const PostLayout: React.FC<PropsWithChildren<Omit<Post, 'mdx'>>> = ({
  children,
  title,
  date,
  readingTime,
  headings,
}) => {
  return (
    <Container size="lg" className="pt-24">
      <PostHeader title={title} date={date} readingTime={readingTime} />
      <main className="grid grid-cols-only-content lg:grid-cols-content-toc gap-4">
        <article id="post" className="prose max-w-none dark:prose-invert mx-auto my-6">
          {children}
        </article>
        <Toc headings={headings} />
      </main>
      <ScrollTopBtn />
    </Container>
  )
}

export default PostLayout
