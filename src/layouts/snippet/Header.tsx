import type { Snippet } from 'contentlayer/generated'

const Header: React.FC<Pick<Snippet, 'title'>> = ({ title }) => {
  return (
    <div className="py-6 mb-4 border-b">
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  )
}

export default Header
