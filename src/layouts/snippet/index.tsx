import { Fragment } from 'react'
import type { Snippet } from 'contentlayer/generated'
import ScrollTopBtn from '@/components/ScrollTopBtn'
import Header from './Header'

const PostLayout: React.FC<Omit<Snippet, 'mdx'>> = ({ children, ...restProps }) => {
  const { title } = restProps

  return (
    <Fragment>
      <Header {...restProps} />
      <div className="lg:grid lg:gap-8">
        <article id="post" className="prose max-w-screen-md dark:prose-invert">
          {children}
        </article>
      </div>

      <ScrollTopBtn />
    </Fragment>
  )
}

export default PostLayout
