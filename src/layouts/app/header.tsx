import Link from 'next/link'
import Image from 'next/image'

import Container from '@/components/Container'
import DarkBtn from '@/components/DarkBtn'
import { WEB_NAME } from '@/constants/config'
import Icon from '@/components/common/icons'

const Header = () => {
  return (
    <header
      id="main-header"
      aria-label="main-header"
      style={{ lineHeight: '4rem' }}
      className="fixed w-full h-16 z-20 bg-white dark:bg-dark filter"
    >
      <Container className="flex items-center">
        <Link href="/">
          <div className="inline-flex items-center select-none cursor-pointer">
            <span aria-label="logo" className="w-6 h-[14px]">
              <Icon name="logoLight" />
            </span>
            <h1 className="font-bold uppercase">{WEB_NAME}</h1>
          </div>
        </Link>

        <div className="flex-1" />
        <DarkBtn />
      </Container>
    </header>
  )
}

export default Header
