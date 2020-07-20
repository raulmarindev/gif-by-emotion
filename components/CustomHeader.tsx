import Link from 'next/link';
import React from 'react';

const CustomHeader = () => {
  return (
    <header className="container mx-auto mb-4">
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <h1 className="text-5xl lg:text-6xl">Reaction GIF Generator</h1>
        </a>
      </Link>
    </header>
  );
};

export default CustomHeader;
