import cls from 'classnames'
import { type PropsWithChildren } from 'react'

interface ContainerProps {
  className?: string
}

const Container: React.FC<PropsWithChildren<ContainerProps>> = ({ children, className }) => (
  <div className={cls('max-w-screen-md mx-auto px-4 lg:px-0', className)}>{children}</div>
)

export default Container
