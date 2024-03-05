import type { PropsWithChildren } from 'react'
import { Outfit } from 'next/font/google'
import ThemeProvider from '@/libs/providers/theme'
import Header from './_components/Header'
import '@/styles/index.css'

type Props = PropsWithChildren

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const Layout = ({ children }: Props) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.className} bg-white text-slate-900 dark:bg-dark dark:text-slate-50`}
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default Layout
