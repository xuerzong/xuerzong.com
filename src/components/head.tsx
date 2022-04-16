import Head from 'next/head';
import { WEB_NAME } from '@/constants/config';

interface CustomerHeadProps {
  title: string;
  tag?: string;
  description?: string;
}

const CustomerHead: React.FC<CustomerHeadProps> = ({
  title,
  description,
  children,
}) => {
  const realTitle = `${title} | ${WEB_NAME.toLocaleUpperCase()}`;
  return (
    <Head>
      <title>{realTitle}</title>
      <meta property="og:title" content={realTitle} />

      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </>
      )}
      {children}
    </Head>
  );
};

export default CustomerHead;
