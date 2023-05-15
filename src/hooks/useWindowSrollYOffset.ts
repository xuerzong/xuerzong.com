import { DependencyList, useState } from 'react'
import useWindowScroll from './useWindowScroll'

const defaultOffset = 200

const useWindowSrollYOffset = (offset = defaultOffset, deps?: DependencyList) => {
  const [is, setIs] = useState(false)

  useWindowScroll(() => {
    setIs(window.scrollY < offset)
  })

  return is
}

export default useWindowSrollYOffset
