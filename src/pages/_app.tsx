import '@/styles/main.scss';
import type { AppProps } from 'next/app';

function SplititApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default SplititApp;
