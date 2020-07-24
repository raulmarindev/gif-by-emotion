import Link from 'next/link';
import React from 'react';

const CustomHeader: React.FC = () => {
  return (
    <header className="text-center text-purple-600 bg-white">
      <h1 className="text-4xl font-bold tracking-tighter lg:text-5xl">
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>GifEmotion</a>
        </Link>
      </h1>
    </header>
  );
};

export default CustomHeader;
