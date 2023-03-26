import cls from 'classnames'
import { type PropsWithChildren } from 'react'

interface ContainerProps {
  className?: string
}

const Container: React.FC<PropsWithChildren<ContainerProps>> = ({ children, className }) => (
  <div className={cls('max-w-screen-xl mx-auto px-4 xl:px-0', className)}>{children}</div>
)

export default Container
