import { PropsWithChildren } from 'react'
import cls from 'classnames'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Container from '@/components/Container'
import type { SideRoute } from '@/types/routes'

interface Props {
  routes: SideRoute[]
}

const DocLayout: React.FC<PropsWithChildren<Props>> = ({ children, routes }) => {
  const {
    query: { slug },
  } = useRouter()

  return (
    <Container
      size="2xl"
      className="grid grid-cols-only-content lg:grid-cols-sidebar-content xl:grid-cols-sidebar-content-toc p-4"
    >
      <div className="lg:-mt-16">
        <aside className="sticky top-0 hidden lg:block px-4 pt-16">
          {routes.map(({ key, title, routes: childrenRoutes }) => (
            <ul key={key} className="mb-4">
              <li
                className="mb-2 text-gray-700 dark:text-gray-200 font-bold text-sm"
                aria-label="title"
              >
                {title}
              </li>
              {childrenRoutes.map((d) => (
                <li
                  key={d.slug}
                  title={d.title}
                  className={cls('py-1 pr-4 text-sm', {
                    'border-gray-200 text-gray-600 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white':
                      slug !== d.slug,
                    'text-primary-700 font-bold': slug === d.slug,
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
      </div>
      <main className="px-4" id="wrapper">
        {children}
      </main>
    </Container>
  )
}

export default DocLayout
