import { faCamera, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';
import React, { useState } from 'react';
import Webcam from 'react-webcam';

const SearchPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="w-2/4 max-w-sm pb-8 mx-auto my-8 overflow-hidden rounded shadow-lg">
      <div className="w-full">
        <Webcam />
      </div>
      {isLoading && (
        <button
          type="button"
          className="block w-10/12 px-4 py-2 mx-auto mt-4 mb-12 font-bold text-center text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          <FontAwesomeIcon icon={faSpinner} />
          analyzing expression...
        </button>
      )}
      {!isLoading && (
        <button
          type="button"
          className="block w-10/12 px-4 py-2 mx-auto mt-4 mb-12 font-bold text-center text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          <FontAwesomeIcon icon={faCamera} />
          &nbsp;submit my current expression
        </button>
      )}
      <p className="text-center">
        <ol className="">
          <li> Make sure your face is well lit from the front.</li>
          <li> Take off glasses or anything that hides your face.</li>
          <li> Try a slightly exaggerated expression! </li>
        </ol>
      </p>
    </div>
  );
};

export default SearchPage;
