import '@/styles/globals.css';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: '500'
});

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={raleway.className}>
      <Component {...pageProps} />
    </div>
  );
}
