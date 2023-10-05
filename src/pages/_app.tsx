import '@/styles/globals.css';
import 'simplebar-react/dist/simplebar.min.css';
import type { AppProps } from 'next/app'
import { Raleway } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';

const raleway = Raleway({
  subsets: ['latin'],
  weight: '500'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-J730V6YZF7"></Script>
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-J730V6YZF7');
      `}
      </Script>
      <div className={raleway.className}>
        <Component {...pageProps} />
      </div>
      <Toaster />
    </>
  );
}
