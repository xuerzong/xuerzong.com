import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

import cls from 'classnames'

const menus = [
  {
    name: 'Home',
    path: '/',
  },
  // {
  //   name: 'Posts',
  //   path: '/posts'
  // },
  {
    name: 'Guestbook',
    path: '/guestbook',
  },
  {
    name: 'Uses',
    path: '/uses',
  },
]

const Navigation: React.FC = () => {
  const pathname = usePathname()
  return (
    <nav>
      <ul className="flex items-center space-x-6">
        {menus.map((menu) => (
          <li key={menu.path}>
            <NextLink href={menu.path}>
              <span className={cls({ 'text-primary-600': pathname === menu.path })}>
                {menu.name}
              </span>
            </NextLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
