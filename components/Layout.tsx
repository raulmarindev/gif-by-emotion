import CustomFooter from './CustomFooter';
import CustomHeader from './CustomHeader';
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <main className="container px-4 mx-auto lg:px-32">
      <CustomHeader />
      {children}
      <CustomFooter />
    </main>
  </>
);

export default Layout;
