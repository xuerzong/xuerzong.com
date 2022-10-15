import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cls from 'classnames'
import { BiMenu } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'

const navigations = [
  {
    title: '🏠 首页',
    path: '/',
  },
  {
    title: '📄 博客',
    path: '/posts',
  },
  {
    title: '💻 代码',
    path: '/snippets',
  },
]

const Navigation: React.FC = () => {
  const { pathname } = useRouter()
  const [open, setOpen] = useState(false)

  const handleTriggerOpen = (newOpen: boolean) => {
    if (newOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    setOpen(newOpen)
  }

  return (
    <nav className="flex items-center">
      <button
        className={cls('relative z-50 md:hidden')}
        onClick={handleTriggerOpen.bind(null, !open)}
      >
        {open ? <IoMdClose className="w-6 h-6" /> : <BiMenu className="w-6 h-6" />}
      </button>
      <ul
        className={cls('select-none', {
          'fixed top-0 left-0 z-40 flex flex-col space-y-6 w-screen h-screen pt-16 px-6 bg-white dark:bg-dark':
            open,
          'hidden md:flex md:space-x-6 md:items-center': !open,
        })}
      >
        {navigations.map((item) => (
          <li key={item.path} className="cursor-pointer">
            <Link href={item.path}>
              <span
                onClick={handleTriggerOpen.bind(null, false)}
                className={cls({ 'font-semibold': item.path === pathname })}
              >
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
