import { get, post } from '@/utils/request'
import type { Guestbook } from '@prisma/client'

export const getGuestbookList = () => {
  return get<Guestbook[]>('/api/v1/guestbook')
}

export const createGuestbook = (content: string) => {
  return post<string>('/api/v1/guestbook', { content })
}
