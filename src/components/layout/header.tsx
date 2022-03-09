import Link from 'next/link';
import Image from 'next/image';
import Container from '../container';
import { DarkBtn } from '../dark-btn';

const Header = () => {
  return (
    <header
      style={{ lineHeight: '4rem' }}
      className="fixed w-full h-16 z-10 bg-white bg-opacity-95 dark:bg-gray-900 dark:bg-opacity-95 filter transition-colors"
    >
      <Container className="flex items-center">
        <Link href="/">
          <div className="inline-flex items-center select-none cursor-pointer">
            <Image
              src="/static/assets/logo.svg"
              alt="xuerzong"
              width={24}
              height={14}
            />
            <h1 className="font-bold uppercase">xuerzong</h1>
          </div>
        </Link>

        <div className="flex-1" />
        <DarkBtn />
      </Container>
    </header>
  );
};

export default Header;
