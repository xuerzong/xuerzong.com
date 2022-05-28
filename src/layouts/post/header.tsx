import { Fragment, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import lodashThrottle from 'lodash.throttle'
import type { Post } from 'contentlayer/generated'
import Time from '@/components/Time'
import Container from '@/components/Container'

const throttleDelay = 200 /* ms */

interface PostHeaderProps extends Pick<Post, 'title' | 'date'> {}

const PostHeader: React.FC<PostHeaderProps> = ({ title, date }) => {
  const [isStickyState, setIsStickyState] = useState<boolean>(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let curY: number = 0,
      preY: number = 0
    const handleScroll = lodashThrottle(() => {
      curY = window.scrollY
      const isScrollTop = curY < preY

      const mainHeader = document.querySelector('#main-header')
      if (!mainHeader) {
        return
      }

      const mainHeaderHeight = mainHeader.clientHeight

      const postHeader = headerRef.current
      if (!postHeader) {
        return
      }
      const postHeaderClientRect = postHeader.getBoundingClientRect()
      if (postHeaderClientRect.bottom < mainHeaderHeight && !isStickyState && !isScrollTop) {
        setIsStickyState(true)
      } else if (isStickyState || isScrollTop) {
        setIsStickyState(false)
      }
      preY = curY
    }, throttleDelay)

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const headerVariants: Variants = {
    show: { translateY: '100%' },
    notShow: { translateY: 0 },
  }

  return (
    <Fragment>
      <div ref={headerRef} className="py-6 mb-6 border-b">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>

        <div aria-label="details">
          <Time>{date}</Time>
        </div>
      </div>

      <motion.header
        id="post-header"
        aria-label="post-header"
        className="fixed -top-16 left-0 z-30 w-full bg-white dark:bg-dark px-2 md:px-0 py-4"
        animate={isStickyState ? 'show' : 'notShow'}
        variants={headerVariants}
      >
        <Container>
          <h1 className="text-2xl font-bold">{title}</h1>
        </Container>
      </motion.header>
    </Fragment>
  )
}

export default PostHeader
