import styles from './index.module.css';
import Layout from '../components/Layout';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';
import Link from 'next/link';
import * as React from 'react';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Find gifs related to your emotion">
      <h2 className="text-3xl lg:text-5xl">
        Take a selfie and get a reaction GIF
      </h2>
      <div className={`${styles.gifExamples} pb-64`}>
        <img
          className="w-10/12 md:w-6/12 lg:w-3/12"
          alt="Bitch please"
          src="/images/bitch-please.gif"
        />
        <img
          className="w-10/12 md:w-6/12 lg:w-3/12"
          alt="Cute Dog"
          src="/images/cute-dog.gif"
        />
        <img
          className="w-10/12 md:w-6/12 lg:w-3/12"
          alt="What"
          src="/images/what.gif"
        />
        <img
          className="w-10/12 md:w-6/12 lg:w-3/12"
          alt="Smug"
          src="/images/smug.gif"
        />
      </div>
      <div>
        <Link href="search">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="inline-block px-4 py-2 font-bold text-center text-white bg-blue-500 rounded hover:bg-blue-700">
            <FontAwesomeIcon icon={faArrowAltCircleRight} size="lg" />
            &nbsp;Click here to get started{' '}
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default IndexPage;
