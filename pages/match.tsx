import Layout from '../components/Layout';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmotionType } from 'api/emotion';
import CustomLinkButton from 'components/CustomLinkButton';
import GiphyGif from 'components/GiphyGif';
import YourEmotionDisplay from 'components/YourEmotionDisplay';
import { GetServerSideProps, NextPage } from 'next';
import * as React from 'react';
import { useEffect, useState } from 'react';

const MatchPage: NextPage<{
  emotionName1: EmotionType;
  emotionName2: EmotionType;
}> = ({ emotionName1, emotionName2 }) => {
  const [base64Image, setBase64Image] = useState('');
  const [isGifVisible, setIsGifVisible] = useState(false);

  useEffect(() => {
    setBase64Image(localStorage.getItem('userImage') || '');
  }, []);

  return (
    <Layout title="Find gifs related to your emotion">
      <YourEmotionDisplay
        base64Image={base64Image}
        emotionName1={emotionName1}
        emotionName2={emotionName2}
      />
      {/*<GifCarousel imageSrc={base64Image} />*/}
      <GiphyGif
        onGifVisible={() => {
          setIsGifVisible(true);
        }}
        searchTerm={emotionName1 === 'neutral' ? emotionName2 : emotionName1}
      />
      {isGifVisible && (
        <CustomLinkButton href="search">
          <FontAwesomeIcon icon={faStepBackward} size="lg" />
          &nbsp;Try again with another selfie{' '}
        </CustomLinkButton>
      )}
    </Layout>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // Pass data to the page via props
  return {
    props: {
      emotionName1: query.emotionName1 ? query.emotionName1 : '',
      emotionName2: query.emotionName2 ? query.emotionName2 : '',
    },
  };
};

export default MatchPage;
