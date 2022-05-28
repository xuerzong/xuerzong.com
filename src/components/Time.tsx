import { CalendarIcon } from '@heroicons/react/outline'
import dayjs from 'dayjs'
import { isString } from '@/utils/is'

interface TimeProps {}

const formatStr = 'YYYY.MM.DD'

const Time: React.FC<TimeProps> = ({ children }) => {
  if (!isString(children)) {
    throw new Error('The children of <Time /> must be a string')
  }

  return (
    <div className="inline-flex items-center">
      <CalendarIcon className="w-4 h-4 mr-1" />
      <time>{dayjs(children).format(formatStr)}</time>
    </div>
  )
}

export default Time
