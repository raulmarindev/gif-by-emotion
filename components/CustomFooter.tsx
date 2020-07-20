import React from 'react';

const CustomFooter = () => {
  return (
    <footer className="container flex justify-between mx-auto mt-6">
      <div>
        An{' '}
        <a
          href="https://github.com/aholachek/gif-search-backend"
          target="_blank"
          rel="noreferrer"
        >
          experimental app
        </a>
        made by{' '}
        <a href="http://alex.holachek.com/" target="_blank" rel="noreferrer">
          <img
            className="inline-block w-8"
            src="images/alex.png"
            alt="author"
          />
          &nbsp;Alex
        </a>
        .
      </div>
      <div>
        <a href="https://giphy.com/">
          <img
            className="inline-block"
            src="images/poweredby.png"
            alt="powered by giphy"
          />
        </a>
        and{' '}
        <a
          href="https://www.microsoft.com/cognitive-services/en-us/emotion-api"
          target="_blank"
          rel="noreferrer"
        >
          the MS Emotion API
        </a>
      </div>
    </footer>
  );
};

export default CustomFooter;
