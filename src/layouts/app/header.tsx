import Link from 'next/link'
import Image from 'next/image'

import Container from '@/components/Container'
import DarkBtn from '@/components/DarkBtn'
import { WEB_NAME } from '@/constants/config'

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
            <Image src="/static/assets/logo.svg" alt="xuerzong" width={24} height={14} />
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
