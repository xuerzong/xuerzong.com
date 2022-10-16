import type { Post } from 'contentlayer/generated'
import { omit } from './lodash'

export const filterContent = <T extends Post>(content: T) => {
  return omit(content, ['body', '_raw', '_id'])
}

export const dateSortDesc = (a: string, b: string) => {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export const sortContent = <T extends Post>(content: T[]) => {
  return content.sort((a, b) => dateSortDesc(a.date, b.date))
}
