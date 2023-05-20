import { Guestbook } from '@prisma/client'
import prisma from '@/libs/prisma'
import { serviceSuccessReturn } from '.'

export const insertGuestbook = async (
  data: Pick<Guestbook, 'email' | 'name' | 'content' | 'image'>
) => {
  const result = await prisma.guestbook.create({ data })
  return serviceSuccessReturn('ok', result)
}

export const findGuestBook = async () => {
  const result = await prisma.guestbook.findMany({
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
  })
  return serviceSuccessReturn('ok', result)
}
