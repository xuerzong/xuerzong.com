import Document, { Html, Head, Main, NextScript } from 'next/document'
import GoogleFontLinks from '@/components/common/google-font'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh">
        <Head>
          <GoogleFontLinks />
        </Head>
        <body className="bg-white dark:bg-dark dark:text-gray-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
