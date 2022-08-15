import React, { Fragment, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import cls from 'classnames'
import { Menu, Transition } from '@headlessui/react'
import Icon, { IconName } from './common/icons'

interface ThemeMenuItem {
  key: 'dark' | 'light' | 'system'
  label: string
  icon: IconName
}

const themeMenuItems: ThemeMenuItem[] = [
  {
    key: 'light',
    label: '浅色',
    icon: 'sunOutlined',
  },
  {
    key: 'dark',
    label: '深色',
    icon: 'moonOutlined',
  },
  {
    key: 'system',
    label: '系统',
    icon: 'computerOutlined',
  },
]

const DarkBtn: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()
  const curThemeItem = themeMenuItems.find((item) => item.key === theme)
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
    }
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="p-1 rounded-md bg-gray-100 dark:bg-gray-700">
        <Icon name={curThemeItem.icon} className="w-5 h-5" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 bottom-0 w-24 mt-0 origin-top-right rounded-md bg-white dark:bg-dark dark:text-gray-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform translate-y-full">
          <div className="p-1">
            {themeMenuItems.map((item) => (
              <Menu.Item key={item.key}>
                {({ active }) => (
                  <button
                    className={cls('flex w-full items-center rounded-md px-2 py-2 text-sm', {
                      'bg-gray-100 dark:bg-gray-700': active,
                    })}
                    onClick={() => setTheme(item.key)}
                  >
                    <span>
                      <Icon name={item.icon} className="h-4 w-4" />
                    </span>
                    <span className="ml-2">{item.label}</span>
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DarkBtn
