import { ComponentPropsWithRef, PropsWithRef, forwardRef } from 'react'
import cls from 'classnames'
import { twMerge } from 'tailwind-merge'

export interface InputProps extends ComponentPropsWithRef<'input'> {
  isError?: boolean
}

const Input: React.FC<PropsWithRef<InputProps>> = forwardRef<HTMLInputElement, InputProps>(
  ({ className, isError, ...restProps }, ref) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          cls(
            'py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 ring-2 ring-offset-0 rounded outline-none transition-color duration-300',
            {
              'ring-gray-200 dark:ring-gray-800 focus:ring-primary-600 dark:focus:ring-primary-700':
                !isError,
              'ring-red-500': isError,
            }
          ),
          className
        )}
        {...restProps}
      />
    )
  }
)

Input.displayName = 'InputRoot'

export default Input
