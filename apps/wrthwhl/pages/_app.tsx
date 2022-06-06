import { globalCss } from '@wrthwhl/ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

const globalStyles = globalCss({
  'html,body': { backgroundColor: '$indigo1' },
});

function CustomApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <Head>
        <title>Welcome to wrthwhl!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
