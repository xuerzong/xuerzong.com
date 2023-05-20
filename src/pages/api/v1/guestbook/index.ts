import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import {
  HttpMethod,
  badRequest,
  created,
  methodNotAllowed,
  ok,
  serverError,
  unauthorized,
} from 'np-nt'
import { findGuestBook, insertGuestbook } from '@/services/server/guestbook'
import { authOptions } from '../../auth/[...nextauth]'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case HttpMethod.Get: {
      return findGuestBook()
        .then(([_, { data, message }]) => ok(res, { data, message }))
        .catch(() => serverError(res))
    }
    case HttpMethod.Post: {
      const session = await getServerSession(req, res, authOptions)

      if (!session) return unauthorized(res)

      const user = session.user
      const { content } = req.body

      if (typeof content !== 'string' || content.length > 1024) return badRequest(res)

      return insertGuestbook({ content, ...(session.user as Required<typeof user>) })
        .then(([_, { data, message }]) => created(res, { data: data.id, message }))
        .catch(() => serverError(res))
    }
    default:
      return methodNotAllowed(res)
  }
}
