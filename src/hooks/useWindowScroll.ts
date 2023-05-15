import { useEffect } from 'react'
import { useThrottledCallback } from 'use-debounce'
import smoothscroll from 'smoothscroll-polyfill'

const useWindowScroll = (callback: () => void) => {
  const throttleCallback = useThrottledCallback(callback, 200)

  useEffect(() => {
    smoothscroll.polyfill()
    throttleCallback()
    window.addEventListener('scroll', throttleCallback)
    return () => {
      window.removeEventListener('scroll', throttleCallback)
    }
  }, [throttleCallback])
}

export default useWindowScroll
