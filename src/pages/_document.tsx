import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GoogleAnalytics } from '@/components/common/google-analytics'
import GoogleFontLinks from '@/components/common/google-font'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh">
        <Head>
          <GoogleFontLinks />
          <GoogleAnalytics />
        </Head>
        <body className="bg-white dark:bg-dark dark:text-gray-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
