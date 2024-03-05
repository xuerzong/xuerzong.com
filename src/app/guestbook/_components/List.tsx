import { getGuestbooks } from '@/db/queries'
import Image from 'next/image'

const Item: React.FC<Guestbook> = ({ name, avatar, content, createdAt }) => {
  return (
    <div className="py-2 border-b">
      <div className="flex items-center space-x-2 mb-2">
        <Image className="w-8 h-8" src={avatar} width={32} height={32} alt="avatar" />

        <div className="flex flex-col">
          <span className="block font-bold">{name}</span>
          {createdAt && <time className="text-xs">{createdAt.toString()}</time>}
        </div>
      </div>

      <p>{content}</p>
    </div>
  )
}

const List = async () => {
  const guestbooks = await getGuestbooks()

  return (
    <>
      {guestbooks.map((guestbook) => (
        <Item key={guestbook.id} {...guestbook} />
      ))}
    </>
  )
}

export default List
