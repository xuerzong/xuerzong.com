import Head from 'next/head';
import { WEB_NAME } from 'constants/config';

interface CustomerHeadProps {
  title: string;
}

const CustomerHead: React.FC<CustomerHeadProps> = ({ title, children }) => {
  return (
    <Head>
      <title>{`${title} | ${WEB_NAME.toLocaleUpperCase()}`}</title>
      {children}
    </Head>
  );
};

export default CustomerHead;
