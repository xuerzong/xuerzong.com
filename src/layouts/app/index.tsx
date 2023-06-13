import React, { ReactNode, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { JetBrains_Mono, Cantarell } from 'next/font/google'
import { KEYWORD_LIST } from '@/constants/config'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

const cantarell = Cantarell({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
})

const Layout: React.FC<Props> = ({ children }) => {
  const { pathname } = useRouter()

  useEffect(() => {
    document.documentElement.classList.add(jetBrainsMono.variable, cantarell.variable)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/static/assets/logo.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="xuerzong" />
        <meta name="keyword" content={KEYWORD_LIST.join(',')} />
        <meta name="description" content="脚踏实地，厚积薄发" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
