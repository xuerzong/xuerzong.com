import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'
import AppLayout from '@/layouts/app'
import '@/styles/tailwind.css'
import '@/styles/prism.css'

const themeProviderProps: ThemeProviderProps = {
  attribute: 'class',
  defaultTheme: 'system',
  storageKey: 'xuerzong-com-theme',
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider {...themeProviderProps}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  )
}

export default MyApp
