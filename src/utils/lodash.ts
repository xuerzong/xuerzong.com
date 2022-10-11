const createObject = <T>(originObj?: T): T => Object.assign({}, originObj)

export const omit = <T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  const result = createObject(obj)

  keys.forEach((item) => {
    delete result[item]
  })

  return result
}

export function debounce<T extends unknown[]>(
  func: (...args: T) => void,
  wait = 500,
  immediate = false
) {
  let timeout
  return function (...args: T) {
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      timeout = null
      if (!immediate) func.apply(this, args)
    }, wait)
    if (immediate && !timeout) func.apply(this, args)
  }
}
