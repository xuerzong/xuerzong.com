import { Outfit } from 'next/font/google'
import type { Metadata } from 'next'
import ThemeProvider from '@/libs/providers/theme'
import CONFIG from '@/constants/config'
import Header from './_components/Header'
import '@/styles/index.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700'],
})

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
  twitter: {
    card: 'summary_large_image',
    title: CONFIG.SITE_TITLE,
    description: CONFIG.SITE_DESCRIPTION,
    site: `@${CONFIG.TWITTER}`,
    // siteId: CONFIG.TWITTER,
    creator: `@${CONFIG.TWITTER}`,
    // creatorId: CONFIG.TWITTER,
    images: [
      {
        url: `${CONFIG.SITE_URL}/images/og-image.png`,
        alt: CONFIG.SITE_DESCRIPTION,
      },
    ],
  },
}

const Layout = ({ children }: React.PropsWithChildren) => {
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
