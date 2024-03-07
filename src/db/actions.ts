'use server'

import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { auth } from '@/libs/auth'

export const insertGuestbook = async (formData: FormData) => {
  const session = await auth()

  if (!session || !session.user) {
    throw new Error('Unauthorized')
  }

  const user = session.user as { email: string; name: string; image: string }
  const content = formData.get('content')?.toString() || ''

  await sql`
    INSERT INTO "GUESTBOOKS" (email, name, avatar, content)
    VALUES (${user.email}, ${user.name}, ${user.image}, ${content})
  `

  revalidatePath('/guestbook')
}
