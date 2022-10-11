import cls from 'classnames'
import { tuple } from '@/utils/type'

const sizes = tuple('sm', 'md', 'lg')

interface Props {
  size?: typeof sizes[number]
}

const Space: React.FC<Props> = ({ size = 'md' }) => {
  return (
    <div
      className={cls({
        'w-2 h-2': size === 'sm',
        'w-4 h-4': size === 'md',
        'w-6 h-6': size === 'lg',
      })}
    />
  )
}

export default Space
