import Link from 'next/link';
import Image from 'next/image';
import Container from '../container';

const Header = () => (
  <header>
    <Container className="flex items-center py-8 sm:pb-16">
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
    </Container>
  </header>
);

export default Header;
