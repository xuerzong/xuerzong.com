import { Fragment } from 'react'
import type { Post } from 'contentlayer/generated'
import Time from '@/components/Time'

interface PostHeaderProps extends Pick<Post, 'title' | 'date'> {}

const PostHeader: React.FC<PostHeaderProps> = ({ title, date }) => {
  return (
    <Fragment>
      <div className="py-6 mb-6 border-b">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>

        <div aria-label="details">
          <Time>{date}</Time>
        </div>
      </div>
    </Fragment>
  )
}

export default PostHeader
