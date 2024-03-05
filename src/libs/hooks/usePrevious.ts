import { useEffect, useRef } from 'react'

const usePrevious = <T = any>(value: T) => {
  const ref = useRef(value)

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

export default usePrevious
