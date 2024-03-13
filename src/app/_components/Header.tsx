'use client'

import { useScroll } from 'framer-motion'
import NextLink from 'next/link'
import cls from 'classnames'

import Container from '@/components/Container'
import ThemeButton from './ThemeButton'
import Navigation from './Navigation'

const WEB_NAME = 'xuerzong'

const useShowHeaderBg = () => {
  const { scrollY } = useScroll()
  return scrollY.get() >= 64
}

const Header = () => {
  return (
    <header
      className={cls(
        'fixed w-full z-50 overflow-hidden h-12 bg-white dark:bg-dark bg-opacity-50 border-b border-gray-200 dark:border-gray-800 transition-height duration-150',
        'backdrop-blur-md backdrop-filter'
      )}
    >
      <Container className="flex items-center h-full">
        <NextLink href="/">
          <h1 className="font-bold w-32 uppercase">{WEB_NAME}</h1>
        </NextLink>

        <div className="ml-auto hidden md:block mr-auto">
          <Navigation />
        </div>

        <div className="ml-auto mr-4 block md:hidden">
          <Navigation.Popover />
        </div>

        <div className="md:w-32 text-right">
          <ThemeButton />
        </div>
      </Container>
    </header>
  )
}

export default Header
