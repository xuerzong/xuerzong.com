import { sql } from '@vercel/postgres'
import { unstable_noStore as noStore } from 'next/cache'
export const getGuestbooks = async () => {
  noStore()
  const { rows } = await sql`SELECT * FROM GUESTBOOKS ORDER BY createdAt DESC`
  return rows as Guestbook[]
}
