import { type PropsWithChildren } from 'react'
import { AiOutlineTag } from 'react-icons/ai'

const Category: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex items-center">
    <AiOutlineTag className="inline-block mr-1" />
    <time>{children}</time>
  </div>
)

export default Category
