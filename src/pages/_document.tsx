import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh">
        <Head />
        <body className="bg-white dark:bg-gray-900 dark:text-gray-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
