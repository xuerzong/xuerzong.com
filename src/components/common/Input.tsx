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
        'px-4 py-3 bg-gray-100 dark:bg-dark text-gray-600 dark:text-gray-100 ring-2 ring-offset-0 ring-gray-200 dark:ring-gray-800 focus:ring-primary-600 dark:focus:ring-primary-700 rounded outline-none',
        className
      )}
      {...restProps}
    />
  )
}

export default Input
