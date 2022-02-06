import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { GA_TRACKING_ID } from '../lib/google-analytics';

export default class Doc extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const lang = this.props.__NEXT_DATA__.props.pageProps?.post?.lang;

    return (
      <Html lang={lang ? lang : 'en-US'}>
        <Head>
          <meta charSet="utf-8" />
          <meta content="Ivan Santos" name="author" />
          <meta property="og:type" content="website" />
          <meta content="summary_large_image" name="twitter:card" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="description"
            content="A Brazilian software engineer specializing in
          fault-tolerant applications and Distributed Systems"
          />

          <title>Ivan Santos</title>

          <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
            }}
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
