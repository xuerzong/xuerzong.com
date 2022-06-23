import { Fragment } from 'react'
import { Post } from 'contentlayer/generated'
import TOC from '@/components/TOC'
import ScrollTopBtn from '@/components/ScrollTopBtn'
import ReadingProcessBar from '@/components/ReadingProcessBar'
import PostHeader from './header'
interface PostLayoutProps extends Omit<Post, 'mdx'> {}

const PostLayout: React.FC<PostLayoutProps> = ({ children, ...restProps }) => {
  const { title, date, headings } = restProps
  return (
    <Fragment>
      <ReadingProcessBar />
      <PostHeader title={title} date={date} />

      <div className="lg:grid lg:gap-8 lg:grid-cols-[auto,250px]">
        <article id="post" className="prose max-w-none dark:prose-invert mx-auto">
          {children}
        </article>
        <aside>
          <TOC headings={headings} />
        </aside>
      </div>

      <ScrollTopBtn />
    </Fragment>
  )
}

export default PostLayout
