import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-white dark:bg-gray-900 dark:text-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
