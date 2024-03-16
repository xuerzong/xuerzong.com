import type { Metadata } from 'next'
import ThemeProvider from '@/libs/providers/theme'
import fonts from '@/fonts'
import CONFIG from '@/constants/config'
import Header from './_components/Header'
import '@/styles/index.css'
import Footer from './_components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.SITE_URL),
  title: {
    default: CONFIG.SITE_TITLE,
    template: `%s | ${CONFIG.SITE_TITLE}`,
  },
  description: CONFIG.SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  creator: 'xuerzong',
  openGraph: {
    title: CONFIG.SITE_TITLE,
    description: CONFIG.SITE_DESCRIPTION,
    url: CONFIG.SITE_URL,
    siteName: CONFIG.SITE_TITLE,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: CONFIG.SITE_TITLE,
    description: CONFIG.SITE_DESCRIPTION,
    site: `@${CONFIG.TWITTER}`,
    siteId: CONFIG.TWITTER_ID,
    creator: `@${CONFIG.TWITTER}`,
    creatorId: CONFIG.TWITTER_ID,
  },
}

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fonts.outfit.className} ${fonts.jetBrainsMono.variable} bg-white text-slate-900 dark:bg-dark dark:text-slate-50`}
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default Layout
