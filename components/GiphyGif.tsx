import { GiphyFetch } from '@giphy/js-fetch-api';
import { IGif } from '@giphy/js-types';
import { Gif } from '@giphy/react-components';
import React, { useEffect, useState } from 'react';

const giphyApiKey = process.env.NEXT_PUBLIC_GIPHY_API_KEY;

if (!giphyApiKey) {
  throw new Error('Set your environment variable for your Giphy Api Key');
}
const giphyFetch = new GiphyFetch(giphyApiKey);

const GiphyGif: React.FC<{
  searchTerm: string;
  onGifVisible: (
    gif: IGif,
    e?: React.SyntheticEvent<HTMLElement, Event> | undefined
  ) => void;
}> = ({ searchTerm, onGifVisible }) => {
  const [gif, setGifList] = useState<IGif | null>(null);
  useEffect(() => {
    async function retrieveGif() {
      try {
        const { data } = await giphyFetch.random({
          tag: searchTerm,
        });
        setGifList(data);
      } catch (error) {
        console.log(error);
      }
    }
    retrieveGif();
  }, []);
  return (
    gif && (
      <div className="mt-4 mb-8">
        <h2 className="text-3xl lg:text-4xl">
          And here is the{' '}
          <span className="font-semibold text-purple-600">reaction GIF</span>
        </h2>
        <Gif
          className="mx-auto rounded"
          gif={gif}
          width={300}
          noLink
          onGifVisible={onGifVisible}
        />
      </div>
    )
  );
};

export default GiphyGif;
