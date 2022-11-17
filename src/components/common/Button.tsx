import cls from 'classnames'
import { forwardRef, type HTMLProps, type PropsWithChildren } from 'react'

interface Props extends HTMLProps<HTMLButtonElement> {
  type?: 'primary' | 'outlined'
  className?: string
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  ({ children, type = 'outlined', className }, ref) => {
    return (
      <button
        ref={ref}
        className={cls(
          'inline-block py-2 px-4 rounded hover:shadow-lg ring-2 ring-primary-500 dark:ring-primary-600 transition-all duration-300',
          {
            'bg-primary-600 dark:bg-primary-700 text-white active:bg-primary-700 dark:active:bg-primary-800':
              type === 'primary',
            'text-primary-600 dark:text-current bg-white dark:bg-gray-700 active:bg-primary-50 dark:active:bg-gray-800':
              type === 'outlined',
          },
          className
        )}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
