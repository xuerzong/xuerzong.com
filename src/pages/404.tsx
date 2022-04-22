import Link from 'next/link';
import Image from 'next/image';
import CustomerHead from '@/components/head';

const NotFoundPage = () => {
  return (
    <>
      <CustomerHead title="Not Found" description="Not Found" />
      <div className="text-center">
        <Image src="/static/assets/404.svg" width={404} height={404}></Image>
        <div className="my-16">
          <Link href="/">
            <button className="px-4 py-2 text-sm bg-primary-500 text-gray-50 hover:bg-primary-600 transition-colors">
              回到首页
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
