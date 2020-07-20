import { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { Router } from 'next/dist/client/router';
import React from 'react';
import 'styles/index.css';

interface IMyAppProps {
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: any;
  router: Router;
}

const MyApp: React.FC<IMyAppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
