import { CSSProperties, useState } from 'react'
import cls from 'classnames'
import useWindowScroll from '@/hooks/useWindowScroll'
import type { PostHeading } from '@/contentlayer/documents/post'
import Link from './mdx/Link'

interface TOCProps {
  headings: PostHeading[]
}

const fromHeadingDepth = 2

export const getNodeText = (node: React.ReactNode): string => {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return node.toString()
  if (node instanceof Array) return node.map(getNodeText).join('')

  if (typeof node === 'object' && (node as any)?.props?.children)
    return getNodeText((node as any).props.children)

  // console.log(node)
  // console.error(`Should be never reached`)
  // debugger

  return ''
}

const TOC: React.FC<TOCProps> = ({ headings }) => {
  const [activeHeadingState, setActiveHeadingState] = useState<string>('')
  useWindowScroll(() => {
    let current: string = ''
    headings.forEach((heading) => {
      const slug = getNodeText(heading.title)
      const headingEle = document.getElementById(slug)
      if (headingEle && headingEle.getBoundingClientRect().top < 240) {
        current = slug
      }
    })
    setActiveHeadingState(current)
  }, [headings])

  const getDepthStyle = (depth: number): CSSProperties => {
    const depthTmp = depth < fromHeadingDepth ? 0 : depth - fromHeadingDepth
    return {
      marginLeft: `${depthTmp + 1}rem`,
    }
  }

  return (
    <div className="hidden lg:block sticky top-20">
      <ul>
        {headings.map(({ title, depth }) => (
          <li
            key={title}
            style={getDepthStyle(depth)}
            title={title}
            className={cls('list-disc', {
              'font-bold text-primary-500': activeHeadingState === getNodeText(title),
            })}
          >
            <Link href={`#${getNodeText(title)}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TOC
