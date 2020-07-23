import Link from 'next/link';
import React from 'react';

const CustomHeader: React.FC = () => {
  return (
    <header className="text-center text-purple-600 bg-white">
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <h1 className="text-4xl font-bold tracking-tighter lg:text-5xl">
            GifEmotion
          </h1>
        </a>
      </Link>
    </header>
  );
};

export default CustomHeader;
