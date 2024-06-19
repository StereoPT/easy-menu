import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import '@/styles/globals.css';

import type { AppProps } from 'next/app';

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<P = {}> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Easy-Menu</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
