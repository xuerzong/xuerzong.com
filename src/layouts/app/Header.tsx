import Link from 'next/link'
import cls from 'classnames'

import Container from '@/components/Container'
import DarkBtn from '@/components/DarkBtn'
import { WEB_NAME } from '@/constants/config'
import Navigation from './Navigation'

const Logo: React.FC = () => {
  return (
    <svg viewBox="0 0 175 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.8"
        d="M21.7157 21.7157C17.8105 17.8105 17.7703 11.3768 22.3736 8.32528C27.7689 4.74875 33.8346 2.23593 40.2455 0.960736C49.9445 -0.968525 59.9979 0.0216417 69.1342 3.80602C78.2705 7.5904 86.0794 13.999 91.5735 22.2215C97.0676 30.4439 100 40.1109 100 50C100 59.8891 97.0676 69.5561 91.5735 77.7785C86.0794 86.001 78.2705 92.4096 69.1342 96.194C59.9979 99.9784 49.9445 100.969 40.2455 99.0393C33.8346 97.7641 27.7689 95.2513 22.3736 91.6747C17.7703 88.6232 17.8105 82.1895 21.7157 78.2843L25.2513 74.7487C29.1565 70.8435 35.4842 71.0901 40.6019 73.1663C42.056 73.7562 43.5691 74.2106 45.1227 74.5196C49.9723 75.4843 54.9989 74.9892 59.5671 73.097C64.1352 71.2048 68.0397 68.0005 70.7867 63.8893C73.5338 59.778 75 54.9445 75 50C75 45.0555 73.5338 40.222 70.7867 36.1107C68.0397 31.9995 64.1352 28.7952 59.5671 26.903C54.9989 25.0108 49.9723 24.5157 45.1227 25.4804C43.5691 25.7894 42.056 26.2438 40.6019 26.8337C35.4842 28.9099 29.1565 29.1565 25.2513 25.2513L21.7157 21.7157Z"
        fill="#A855F7"
      />
      <path
        opacity="0.8"
        d="M153.284 78.2843C157.19 82.1895 157.23 88.6232 152.626 91.6747C147.231 95.2512 141.165 97.7641 134.755 99.0393C125.055 100.969 115.002 99.9784 105.866 96.194C96.7295 92.4096 88.9206 86.001 83.4265 77.7785C77.9325 69.5561 75 59.8891 75 50C75 40.1109 77.9325 30.4439 83.4265 22.2215C88.9206 13.999 96.7295 7.59041 105.866 3.80603C115.002 0.0216429 125.055 -0.968525 134.755 0.960735C141.165 2.23593 147.231 4.74875 152.626 8.32528C157.23 11.3768 157.19 17.8105 153.284 21.7157L149.749 25.2513C145.844 29.1565 139.516 28.9099 134.398 26.8337C132.944 26.2438 131.431 25.7894 129.877 25.4804C125.028 24.5157 120.001 25.0108 115.433 26.903C110.865 28.7952 106.96 31.9995 104.213 36.1107C101.466 40.222 100 45.0555 100 50C100 54.9445 101.466 59.778 104.213 63.8893C106.96 68.0005 110.865 71.2048 115.433 73.097C120.001 74.9892 125.028 75.4843 129.877 74.5196C131.431 74.2106 132.944 73.7562 134.398 73.1663C139.516 71.0901 145.844 70.8435 149.749 74.7487L153.284 78.2843Z"
        fill="#3B82F6"
      />
    </svg>
  )
}

const Header = () => {
  return (
    <header
      id="main-header"
      className={cls('fixed w-full h-16 z-50 bg-white dark:bg-gray-900 bg-opacity-95 filter')}
    >
      <Container size="2xl" className="flex items-center h-full">
        <Link href="/">
          <div className="inline-flex items-center select-none cursor-pointer">
            <span className="inline-block w-6 h-[14px]">
              <Logo />
            </span>
            <h1 className="font-bold uppercase">{WEB_NAME}</h1>
          </div>
        </Link>

        <div className="flex-1" />
        <Navigation />
        <div className="w-6"></div>
        <DarkBtn />
      </Container>
    </header>
  )
}

export default Header
