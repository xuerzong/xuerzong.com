import { getGuestbooks } from '@/db/queries'
import { CamelKeys } from 'string-ts'

const fomartNumber = (num: number) => {
  return num < 10 ? `0${num}` : num
}

const Item: React.FC<CamelKeys<Guestbook>> = ({ name, avatar, content, createdAt }) => {
  const formatDate = (date: Date) => {
    const _date = new Date(date)
    return `${_date.getFullYear()}-${fomartNumber(_date.getMonth() + 1)}-${fomartNumber(_date.getDate())}`
  }

  return (
    <div className="py-2 border-b">
      <div className="flex items-center space-x-2 mb-2">
        <picture>
          <img className="w-8 h-8" src={avatar} width={32} height={32} alt="avatar" />
        </picture>
        <div className="flex flex-col">
          <span className="block font-bold">{name}</span>
          {createdAt && <time className="text-xs">{formatDate(createdAt)}</time>}
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
      {guestbooks.map((guestbook: CamelKeys<Guestbook>) => (
        <Item key={guestbook.id} {...guestbook} />
      ))}
    </>
  )
}

export default List
