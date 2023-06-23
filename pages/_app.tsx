import '../styles/globals.scss';
import 'remixicon/fonts/remixicon.css';

import type { AppProps } from 'next/app';
import Footer from '../components/Footer';
import { DefaultSeo } from 'next-seo';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://ivansantos.me${router.asPath}`;
  return (
    <>
      <NextNProgress color="#5C4B77" />
      <DefaultSeo
        titleTemplate="%s - Ivan Santos"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url,
          description: 'The personal website for Ivan Santos.',
          site_name: 'Ivan Santos | ivansantos.me',
          images: [],
        }}
        twitter={{
          handle: '@pragmaticivan',
          site: 'http://ivansantos.me',
          cardType: 'summary_large_image',
        }}
        canonical={url}
      />

      <Component {...pageProps} canonical={url} key={url} />
      <Footer />
    </>
  );
}

export default MyApp;
