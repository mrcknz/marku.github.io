import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { Global } from '@mantine/core';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Global
          styles={(theme) => ({
            'body, #__next': { height: '100vh' }, //? is there really no way to do this from theme?
          })}
        />
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Kufam:ital,wght@0,400;0,800;1,400;1,800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
