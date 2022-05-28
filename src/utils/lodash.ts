const createObject = <T>(originObj?: T): T => Object.assign({}, originObj)

export const omit = <T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  const result = createObject(obj)

  keys.forEach((item) => {
    delete result[item]
  })

  return result
}
