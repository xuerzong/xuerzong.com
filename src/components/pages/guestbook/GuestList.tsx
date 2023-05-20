import type { Guestbook } from '@prisma/client'
import Empty from '@/components/Empty'
import { useGuestbook } from '@/hooks/swr/useGuestbook'
import moment from '@/utils/moment'

const GuestItem: React.FC<Pick<Guestbook, 'name' | 'image' | 'content' | 'createdAt'>> = ({
  name,
  image,
  content,
  createdAt,
}) => {
  return (
    <div className="py-2 border-b">
      <div className="flex items-center space-x-2 mb-2">
        <img className="w-8 h-8" src={image} width={32} height={32} alt="avatar" />

        <div className="flex flex-col">
          <span className="block font-bold">{name}</span>
          <time className="text-xs">{moment(createdAt).format('YYYY-MM-DD hh:mm:ss')}</time>
        </div>
      </div>

      <p>{content}</p>
    </div>
  )
}

const GuestItemSkeleton = () => {
  return (
    <div className="py-2 border-b animate-pulse">
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full" />

        <div className="space-y-1">
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded-full" />
          <div className="h-2 w-16 bg-gray-200 dark:bg-gray-700 rounded-full" />
        </div>
      </div>

      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full" />
    </div>
  )
}

const GuestList = () => {
  const { data, isLoading } = useGuestbook()

  if (isLoading) {
    return (
      <div className="space-y-4">
        <GuestItemSkeleton />
        <GuestItemSkeleton />
        <GuestItemSkeleton />
      </div>
    )
  }

  const {
    ok,
    data: { data: guestList = [] },
  } = data

  if (!guestList.length) {
    return <Empty />
  }

  return (
    <div className="space-y-4">
      {guestList.map((i) => (
        <GuestItem key={i.id} {...i} />
      ))}
    </div>
  )
}

export default GuestList
