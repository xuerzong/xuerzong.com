import cls from 'classnames'
import React, { forwardRef, type PropsWithChildren, type ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { LoadingIcon } from './icons/Loading'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: any
  variant?: 'primary' | 'outlined'
  className?: string
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  ({ children, icon, variant = 'outlined', loading, disabled, className, ...restProps }, ref) => {
    const shouldDisabled = loading || disabled

    return (
      <button
        ref={ref}
        className={twMerge(
          'inline-flex items-center justify-center py-3 px-6 rounded transition-all duration-300 whitespace-nowrap',
          cls({
            'bg-primary-600 dark:bg-primary-700 text-white active:bg-primary-700 dark:active:bg-primary-800 border-2 border-primary-600 dark:border-primary-700':
              variant === 'primary',
            'hover:bg-primary-600 active:bg-primary-600 dark:hover:bg-primary-700 dark:active:bg-700':
              variant === 'primary' && shouldDisabled,
            'text-primary-600 dark:text-primary-500 bg-transparent hover:bg-primary-50 dark:hover:bg-primary-950 active:bg-primary-100 dark:active:bg-primary-900 border-2 border-current':
              variant === 'outlined',
            'hover:bg-transparent active:bg-transparent dark:hover:bg-transparent dark:active:bg-transparent':
              variant === 'outlined' && shouldDisabled,
          }),
          loading && 'relative cursor-progress',
          className
        )}
        disabled={shouldDisabled}
        {...restProps}
      >
        {Boolean(icon) &&
          React.createElement(icon, {
            className: cls('w-5 h-5 mr-2', { 'opacity-0': loading }),
          })}
        <span className={cls({ 'opacity-0': loading })}>{children}</span>
        {loading && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <LoadingIcon className="animate-spin w-5 h-5" />
          </div>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
