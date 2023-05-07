import cls from 'classnames'
import { type CSSProperties, type PropsWithChildren } from 'react'

interface ContainerProps {
  size?: 'md' | 'lg' | 'xl' | '2xl'
  className?: string
  style?: CSSProperties
}

const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
  size = 'md',
  ...restProps
}) => (
  <div
    className={cls(
      'mx-auto px-4',
      {
        'max-w-screen-md': size === 'md',
        'max-w-screen-lg': size === 'lg',
        'max-w-screen-xl': size === 'xl',
        'max-w-screen-2xl': size === '2xl',
      },
      className
    )}
    {...restProps}
  >
    {children}
  </div>
)

export default Container
