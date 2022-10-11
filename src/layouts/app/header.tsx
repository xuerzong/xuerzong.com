import Link from 'next/link'
import cls from 'classnames'

import Container from '@/components/Container'
import DarkBtn from '@/components/DarkBtn'
import { WEB_NAME } from '@/constants/config'
import Icon from '@/components/common/icons'
import useWindowSrollYOffset from '@/hooks/useWindowSrollYOffset'
import Navigation from './Navigation'

const Header = () => {
  const windowScrollYOffset = useWindowSrollYOffset(64)

  return (
    <header
      id="main-header"
      style={{ lineHeight: '4rem' }}
      className={cls('fixed w-full h-16 z-20 bg-white dark:bg-dark filter', {
        'shadow bg-opacity-95': !windowScrollYOffset,
      })}
    >
      <Container className="flex items-center">
        <Link href="/">
          <div className="inline-flex items-center select-none cursor-pointer">
            <span className="inline-block w-6 h-[14px]">
              <Icon name="logoLight" />
            </span>
            <h1 className="font-bold uppercase">{WEB_NAME}</h1>
          </div>
        </Link>

        <div className="flex-1" />
        <Navigation />
        <div className="w-6"></div>
        <DarkBtn />
      </Container>
    </header>
  )
}

export default Header
