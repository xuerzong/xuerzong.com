import { Fragment } from 'react'
import dayjs from 'dayjs'
import { Book, CalendarTime } from 'tabler-icons-react'
import type { Post } from 'contentlayer/generated'

const readingTimerFormat = (text: string) => {
  return '约' + text.replace('min read', '').trim() + '分钟'
}

const PostHeader: React.FC<Pick<Post, 'title' | 'date' | 'readingTime'>> = ({
  title,
  date,
  readingTime,
}) => {
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
            <span>{readingTimerFormat(readingTime.text)}</span>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PostHeader
