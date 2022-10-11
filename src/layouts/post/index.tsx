import { Fragment } from 'react'
import { Post } from 'contentlayer/generated'
import ScrollTopBtn from '@/components/ScrollTopBtn'
import ReadingProcessBar from '@/components/ReadingProcessBar'
import PostHeader from './header'

interface PostLayoutProps extends Omit<Post, 'mdx'> {}

const PostLayout: React.FC<PostLayoutProps> = ({ children, ...restProps }) => {
  const { title, date, readingTime } = restProps

  return (
    <Fragment>
      <ReadingProcessBar />
      <PostHeader title={title} date={date} readingTime={readingTime} />

      <div className="lg:grid lg:gap-8">
        <article id="post" className="prose max-w-none dark:prose-invert mx-auto">
          {children}
        </article>
      </div>

      <ScrollTopBtn />
    </Fragment>
  )
}

export default PostLayout
