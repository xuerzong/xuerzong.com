import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import { ThemeProvider } from 'next-themes'
import NProgress from 'nprogress'
import type { ThemeProviderProps } from 'next-themes/dist/types'
import AppLayout from '@/layouts/app'
import GoogleAnalytics from '@/components/extends/GoogleAnalytics'

import '@/styles/nprogress.css'
import '@/styles/tailwind.css'
import '@/styles/prism.css'
import '@/styles/global.css'

const themeProviderProps: ThemeProviderProps = {
  attribute: 'class',
  defaultTheme: 'system',
  storageKey: 'xuerzong-com-theme',
  enableSystem: true,
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    Router.events.on('routeChangeStart', handleRouteStart)
    Router.events.on('routeChangeComplete', handleRouteDone)
    Router.events.on('routeChangeError', handleRouteDone)

    return () => {
      Router.events.off('routeChangeStart', handleRouteStart)
      Router.events.off('routeChangeComplete', handleRouteDone)
      Router.events.off('routeChangeError', handleRouteDone)
    }
  }, [])

  return (
    <>
      <GoogleAnalytics />
      <ThemeProvider {...themeProviderProps}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
