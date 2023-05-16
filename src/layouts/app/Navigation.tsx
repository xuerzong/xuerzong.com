import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cls from 'classnames'
import { HomeIcon, DocumentTextIcon, CursorArrowRippleIcon } from '@heroicons/react/24/outline'
import { BiMenu } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'

const navigations = [
  {
    icon: HomeIcon,
    title: '首页',
    path: '/',
  },
  {
    icon: DocumentTextIcon,
    title: '博客',
    path: '/posts',
  },
  {
    icon: CursorArrowRippleIcon,
    title: '联系我',
    path: '/contact',
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
          'fixed top-0 left-0 z-40 flex flex-col space-y-6 w-screen h-screen pt-16 px-6 bg-white dark:bg-gray-900':
            open,
          'hidden md:flex md:space-x-6 md:items-center': !open,
        })}
      >
        {navigations.map((item) => (
          <li key={item.path} className="cursor-pointer">
            <Link href={item.path}>
              <div
                onClick={handleTriggerOpen.bind(null, false)}
                className={cls('inline-flex items-center pl-2 pr-3 py-1 space-x-1 rounded', {
                  'text-primary-600 dark:text-primary-500 font-bold':
                    item.path === '/' ? item.path === pathname : pathname.startsWith(item.path),
                })}
              >
                {React.createElement(item.icon, {
                  className: 'w-5 h-5',
                })}
                <span>{item.title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
