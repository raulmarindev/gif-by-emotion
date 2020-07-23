import CustomFooter from './CustomFooter';
import CustomHeader from './CustomHeader';
import Head from 'next/head';
import * as React from 'react';

type ILayoutProps = {
  title?: string;
};

const Layout: React.FC<ILayoutProps> = ({
  children,
  title = 'This is the default title',
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <CustomHeader />
    <main className="py-8 text-center">{children}</main>
    <CustomFooter />
  </>
);

export default Layout;
