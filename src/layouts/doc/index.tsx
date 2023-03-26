import { PropsWithChildren } from 'react'
import cls from 'classnames'
import Container from '@/components/Container'
import { Nav } from '@/types/common'
import Link from 'next/link'

interface Props {
  navs: Record<string, Nav[]>
}

const DocLayout: React.FC<PropsWithChildren<Props>> = ({ children, navs }) => {
  const navsKeys = Object.keys(navs)

  return (
    <Container className="flex p-4">
      <aside className="w-72 px-4">
        {navsKeys.map((k) => (
          <ul key={k}>
            <li
              className="mb-2 text-gray-700 dark:text-gray-200 font-bold text-sm"
              aria-label="title"
            >
              {k}
            </li>
            {navs[k].map((d) => (
              <li
                key={d.slug}
                title={d.title}
                className={cls('py-2 px-4 rounded', {
                  'bg-primary-700 text-white': d.active,
                })}
              >
                <Link className="inline-block w-full truncate" href={`/docs/${d.slug}`}>
                  <span>{d.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </aside>
      <main className="col-span-2 px-4 border-l" id="wrapper">
        {children}
      </main>
    </Container>
  )
}

export default DocLayout
