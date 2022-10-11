import { Fragment } from 'react'
import dayjs from 'dayjs'
import { Book, CalendarTime } from 'tabler-icons-react'
import type { Post } from 'contentlayer/generated'
import Time from '@/components/Time'

interface PostHeaderProps extends Pick<Post, 'title' | 'date' | 'readingTime'> {}

const PostHeader: React.FC<PostHeaderProps> = ({ title, date, readingTime }) => {
  console.log(readingTime)
  return (
    <Fragment>
      <div className="py-6 mb-6 border-b">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>

        <div className="flex items-center space-x-6">
          <div className="flex items-center font-mono">
            <CalendarTime size={20} className="mr-2" />
            <span>{dayjs(date).format('YYYY/MM/DD')}</span>
          </div>

          <div className="flex items-center font-mono">
            <Book size={20} className="mr-2" />
            <span>{readingTime.words}</span>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PostHeader
