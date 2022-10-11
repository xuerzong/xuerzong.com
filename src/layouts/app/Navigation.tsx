import Link from 'next/link'
import cls from 'classnames'
import { useRouter } from 'next/router'

const navigations = [
  {
    title: '首页',
    path: '/',
  },
  {
    title: '博客',
    path: '/posts',
  },
]

const Navigation: React.FC = () => {
  const { pathname } = useRouter()

  const navigationsRender = navigations.map((item) => (
    <li key={item.path} className="cursor-pointer">
      <Link href={item.path}>
        <span className={cls({ 'font-bold': item.path === pathname })}>{item.title}</span>
      </Link>
    </li>
  ))

  return (
    <nav>
      <ul className="flex items-center space-x-6 select-none">{navigationsRender}</ul>
    </nav>
  )
}

export default Navigation
