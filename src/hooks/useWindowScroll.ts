import throttle from 'lodash.throttle'
import { DependencyList, useEffect } from 'react'

const useWindowScroll = (callback: () => void, deps?: DependencyList) => {
  useEffect(() => {
    const throttleCallback = throttle(callback, 200)
    throttleCallback()
    window.addEventListener('scroll', throttleCallback)
    return () => {
      window.removeEventListener('scroll', throttleCallback)
    }
  }, deps)
}

export default useWindowScroll
