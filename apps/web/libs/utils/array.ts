export const flattenArray = <T>(arr: any[]): T[] => {
  return arr.reduce(
    (pre, cur) => [...pre, ...(Array.isArray(cur) ? flattenArray(cur) : [cur])],
    [] as T[]
  )
}
