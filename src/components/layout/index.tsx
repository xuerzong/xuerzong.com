import React, { ReactNode } from 'react';
import Head from 'next/head';

import { KEYWORD_LIST } from '@/constants/config';
import Header from './header';
import Footer from './footer';
import Container from '../container';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Head>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/assets/logo.png"
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content="xuerzong" />
      <meta name="keyword" content={KEYWORD_LIST.join(',')} />
      <meta name="description" content="脚踏实地，厚积薄发" />
      <meta name="robots" content="index, follow" />
    </Head>
    <Header />
    <main className="pt-16">
      <Container className="p-4">{children}</Container>
    </main>
    <Footer />
  </>
);

export default Layout;
