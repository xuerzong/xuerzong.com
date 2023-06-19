import { type PropsWithChildren } from 'react'
import dayjs from 'dayjs'
import { isString } from '@/utils/is'
import Icon from './common/icons'

const formatStr = 'YYYY.MM.DD'

const Time: React.FC<PropsWithChildren> = ({ children }) => {
  if (!isString(children)) {
    throw new Error('The children of <Time /> must be a string')
  }

  return (
    <div>
      <Icon name="calendarOutlined" className="inline-block w-4 h-4 mr-1 align-[-.125em]" />
      <time className="leading-7">{dayjs(children).format(formatStr)}</time>
    </div>
  )
}

export default Time
