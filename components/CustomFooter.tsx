import React from 'react';

const CustomFooter: React.FC = () => {
  return (
    <footer className="px-4 py-12 mt-6 text-purple-200 bg-purple-500">
      <div className="container flex justify-between mx-auto">
        <div>
          Made with ♥ by{' '}
          <a
            href="https://github.com/raulmarindev/gif-by-emotion"
            target="_blank"
            rel="noreferrer"
          >
            @raulmarindev
          </a>
          . Thank you,{' '}
          <a href="http://alex.holachek.com/" target="_blank" rel="noreferrer">
            Alex Holachek
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
      </div>
    </footer>
  );
};

export default CustomFooter;
