import type { AppProps } from 'next/app';
import Layout from '@/components/layout';
import { ThemeProvider } from '@/contexts/theme';
import 'styles/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
