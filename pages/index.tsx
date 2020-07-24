import styles from './index.module.css';
import Layout from '../components/Layout';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomLinkButton from 'components/CustomLinkButton';
import { NextPage } from 'next';
import * as React from 'react';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Find gifs related to your emotion">
      <h2 className="text-3xl lg:text-4xl">
        Take a <span className="font-semibold text-purple-600">selfie</span> and
        get a{' '}
        <span className="font-semibold text-purple-600">reaction GIF</span>
      </h2>
      <div
        className={`${styles.gifExamples} mx-auto pt-4 pb-56 lg:pb-64 w-10/12 md:w-6/12 lg:w-3/12`}
      >
        <img
          alt="Bitch please"
          className="rounded w-80 sm:w-84 lg:w-96"
          src="/images/bitch-please.gif"
        />
        <img
          alt="Cute Dog"
          className="rounded w-80 sm:w-84 lg:w-96"
          src="/images/cute-dog.gif"
        />
        <img
          alt="What"
          className="rounded w-80 sm:w-84 lg:w-96"
          src="/images/what.gif"
        />
        <img
          alt="Smug"
          className="rounded w-80 sm:w-84 lg:w-96"
          src="/images/smug.gif"
        />
      </div>
      <CustomLinkButton href="search">
        <FontAwesomeIcon icon={faArrowAltCircleRight} size="lg" />
        &nbsp;Click here to get started{' '}
      </CustomLinkButton>
    </Layout>
  );
};

export default IndexPage;
