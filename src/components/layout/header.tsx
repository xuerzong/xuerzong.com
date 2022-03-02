import Link from 'next/link';
import Image from 'next/image';
import Container from '../container';
import { useEffect, useRef, useState } from 'react';

const DARK_MODE_KEY = 'XUERZONG_DARK_MODE_KEY';

const Header = () => {
  const [darkModeState, setDarkModeState] = useState<boolean>(false);

  const handleChangeMode = () => {
    if (darkModeState) {
      setDarkModeState(false);
      sessionStorage.removeItem(DARK_MODE_KEY);
    } else {
      setDarkModeState(true);
      sessionStorage.setItem(DARK_MODE_KEY, DARK_MODE_KEY);
    }
  };

  useEffect(() => {
    setDarkModeState(
      !!sessionStorage.getItem(DARK_MODE_KEY) ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  }, []);

  useEffect(() => {
    console.log('----');
    if (darkModeState) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkModeState]);

  return (
    <header
      style={{ lineHeight: '4rem' }}
      className="fixed w-full h-16 z-10 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 border-b dark:border-gray-700 filter"
    >
      <Container className="flex items-center">
        <Link href="/">
          <div className="inline-flex items-center cursor-pointer">
            <Image
              src="/static/assets/logo.svg"
              alt="xc"
              width={24}
              height={14}
            />
            <span className="font-bold uppercase">xuerzong</span>
          </div>
        </Link>

        <div className="flex-1" />

        <i className="gg-sun cursor-pointer" onClick={handleChangeMode} />
      </Container>
    </header>
  );
};

export default Header;
