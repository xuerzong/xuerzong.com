import { sql } from '@vercel/postgres'
import { unstable_noStore as noStore } from 'next/cache'
import { CamelKeys, camelKeys } from 'string-ts'
export const getGuestbooks = async () => {
  noStore()
  const { rows } = await sql`SELECT * FROM "GUESTBOOKS" ORDER BY created_at DESC`
  return rows.map(camelKeys) as CamelKeys<Guestbook>[]
}
