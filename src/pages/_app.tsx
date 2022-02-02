import { AppProps } from 'next/app';
import 'styles/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default MyApp;
