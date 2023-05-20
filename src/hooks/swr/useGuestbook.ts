import useSWR from 'swr'
import { getGuestbookList } from '@/services/client/guestbook'

export const useGuestbook = () => {
  return useSWR('/api/v1/guestbook', getGuestbookList)
}
