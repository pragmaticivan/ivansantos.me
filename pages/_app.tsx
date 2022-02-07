import '../styles/globals.scss';
import 'remixicon/fonts/remixicon.css';
import { AnimatePresence } from 'framer-motion';

import type { AppProps } from 'next/app';
import Footer from '../components/Footer';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://ivansantos.me${router.route}`;
  return (
    <>
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

      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
