import { useState } from 'react'
import cls from 'classnames'
import { ListBulletIcon } from '@heroicons/react/24/outline'
import useWindowScroll from '@/hooks/useWindowScroll'
import Link from '../mdx/Link'

interface Heading {
  title: string
  depth: number
}

interface Props {
  headings: Heading[]
}

const defaultOffset = 240

const Toc: React.FC<Props> = ({ headings }) => {
  const [activeHeading, setActiveHeading] = useState('')

  useWindowScroll(() => {
    let current = ''
    for (const { title } of headings) {
      const element = document.getElementById(title)
      if (element && element.getBoundingClientRect().top < defaultOffset) {
        current = title
      }
    }
    setActiveHeading(current)
  })

  return (
    <div>
      <ul className="sticky top-4 px-2 py-4 w-full">
        <div className="flex items-center space-x-2 text-sm font-bold mb-4">
          <ListBulletIcon className="w-6 h-6" />
          <span>目录</span>
        </div>
        {headings.map(({ title, depth }) => (
          <li
            key={title}
            style={{ marginLeft: `${Math.max(depth - 1, 0)}rem` }}
            className={cls('py-1', { 'text-primary-500': activeHeading === title })}
          >
            <Link href={`#${title}`}>
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Toc
