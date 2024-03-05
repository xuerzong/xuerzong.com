'use client'

import { useScrollDirection } from 'react-use-scroll-direction'
import { useScroll } from 'framer-motion'
import { useMemo } from 'react'
import NextLink from 'next/link'
import cls from 'classnames'

import Container from '@/components/Container'
import usePrevious from '@/libs/hooks/usePrevious'
import ThemeButton from './ThemeButton'
import Navigation from './Navigation'

const WEB_NAME = 'xuerzong'

const useShowHeader = () => {
  const { isScrollingUp, isScrollingDown } = useScrollDirection()
  const isScrollingUpPrev = usePrevious(isScrollingUp)
  const isScrollingDownPrev = usePrevious(isScrollingDown)

  return useMemo(() => {
    const scrollingUp = isScrollingUp || isScrollingUpPrev
    const scrollingDown = isScrollingDown || isScrollingDownPrev

    let result = true

    if (scrollingUp) result = true

    if (scrollingDown) result = false

    return result
  }, [isScrollingDown, isScrollingDownPrev, isScrollingUp, isScrollingUpPrev])
}

const useShowHeaderBg = () => {
  const { scrollY } = useScroll()
  return scrollY.get() >= 64
}

const Header = () => {
  const showHeader = useShowHeader()
  const showHeaderBg = useShowHeaderBg()
  return (
    <header
      className={cls(
        'fixed w-full z-50 overflow-hidden transition-height duration-150',
        showHeader ? 'h-16' : 'h-0',
        showHeaderBg
          ? 'bg-white dark:bg-dark border-b border-gray-200 dark:border-gray-800'
          : 'bg-transparent'
      )}
    >
      <Container className="flex items-center h-full">
        <NextLink href="/">
          <h1 className="font-bold w-32 uppercase">{WEB_NAME}</h1>
        </NextLink>

        <div className="ml-auto mr-4 md:mr-auto">
          <Navigation />
        </div>

        <div className="md:w-32 text-right">
          <ThemeButton />
        </div>
      </Container>
    </header>
  )
}

export default Header
