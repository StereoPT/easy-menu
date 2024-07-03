import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Theme } from 'react-daisyui';

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
        <meta
          name="description"
          content="Easy Menu is a cutting-edge web application that empowers businesses to create stunning, professional-grade PDF pricing lists with unparalleled ease."
        />
        <meta
          name="keywords"
          content="Customizable PDF pricing lists,
Professional pricing list generator,
Restaurant menu design,
Cafe menu creator,
Digital pricing lists,
Printable pricing lists,
Business pricing list tool,
Easy menu creation,
High-quality menu generator,
User-friendly menu design,
Custom PDF menu maker,
Online pricing list app,
Restaurant menu PDF,
Pricing list software,
Menu design application,
Digital menu creation,
PDF menu customization,
Business menu solution,
PDF menu generator,
Menu design software"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />

        <meta property="og:site_name" content="Easy-Menu" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Easy-Menu" />
        <meta
          property="og:description"
          content="Easy Menu is a cutting-edge web application that empowers businesses to create stunning, professional-grade PDF pricing lists with unparalleled ease."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://easy-menu-one.vercel.app/" />
        <meta
          property="og:image"
          content="https://easy-menu-one.vercel.app/images/thumbnail.png"
        />
        <meta property="og:image:alt" content="Easy-Menu" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Easy-Menu" />
        <meta
          name="twitter:description"
          content="Easy Menu is a cutting-edge web application that empowers businesses to create stunning, professional-grade PDF pricing lists with unparalleled ease.."
        />
        <meta
          name="twitter:image"
          content="https://easy-menu-one.vercel.app/images/thumbnail.png"
        />
      </Head>
      <Theme dataTheme="emerald">
        {getLayout(<Component {...pageProps} />)}
      </Theme>
    </>
  );
};

export default App;
