import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GoogleAnalytics } from '@/components/common/google-analytics';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh">
        <Head>
          <GoogleAnalytics />
        </Head>
        <body className="bg-white dark:bg-dark dark:text-gray-300 transition-all">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
