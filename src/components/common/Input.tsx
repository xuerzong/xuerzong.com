import type { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'
import cls from 'classnames'

export interface InputProps {
  className?: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input: React.FC<InputProps> = ({ className, ...restProps }) => {
  return (
    <input
      className={cls(
        'px-4 py-2 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-100 ring-primary-400 dark:ring-primary-600 focus:ring-2 rounded outline-none',
        className
      )}
      {...restProps}
    />
  )
}

export default Input
