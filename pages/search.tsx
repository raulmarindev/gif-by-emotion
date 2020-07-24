import { faCamera, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { analyzeFaceInImage } from 'api/emotion';
import Layout from 'components/Layout';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

const preventDefault = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.preventDefault();
};

const SearchPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const webcamRef = useRef<Webcam & HTMLVideoElement>(null);
  const router = useRouter();

  const captureImage = useCallback(async () => {
    const imageSrc = webcamRef?.current?.getScreenshot();

    if (imageSrc) {
      localStorage.setItem('userImage', imageSrc);

      setIsLoading(true);
      try {
        const emotionNames = await analyzeFaceInImage(imageSrc);
        router.push({
          pathname: '/match',
          query: {
            emotionName1: emotionNames[0],
            emotionName2: emotionNames[1],
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [webcamRef]);

  return (
    <Layout title="Find gifs related to your emotion">
      <div className="w-10/12 max-w-sm pb-4 mx-auto overflow-hidden text-black bg-white rounded shadow-lg lg:w-2/4">
        <div className="w-full mb-4">
          <Webcam
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
          />
        </div>
        <button
          type="button"
          className="inline-block px-4 py-2 text-base font-medium leading-6 text-white transition duration-300 ease-in-out bg-purple-600 border border-transparent rounded-md hover:bg-purple-700 focus:outline-none focus:border-purple-900 focus:shadow-outline-purple md:py-3 md:text-lg md:px-8"
          onClick={isLoading ? preventDefault : captureImage}
        >
          {isLoading ? (
            <>
              <FontAwesomeIcon icon={faSpinner} />
              &nbsp;&nbsp;Analyzing expression...
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faCamera} />
              &nbsp;&nbsp;Submit my current expression
            </>
          )}
        </button>
        <div className="mt-4 text-center">
          <ol>
            <li> Make sure your face is well lit from the front.</li>
            <li> Take off glasses or anything that hides your face.</li>
            <li> Try a slightly exaggerated expression! </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
