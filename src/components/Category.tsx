import { AiOutlineTag } from 'react-icons/ai'

const Category: React.FC = ({ children }) => (
  <div className="flex items-center">
    <AiOutlineTag className="inline-block mr-1" />
    <time>{children}</time>
  </div>
)

export default Category
