import React, { ReactNode } from 'react';
import Head from 'next/head';
import { WEB_NAME } from 'constants/config';
import Header from './header';
import Footer from './footer';
import Container from '../container';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <>
    <Head>
      <title>{`${title} | ${WEB_NAME.toLocaleUpperCase()}`}</title>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/assets/logo.png"
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <main>
      <Container>{children}</Container>
    </main>
    <Footer />
  </>
);

export default Layout;
