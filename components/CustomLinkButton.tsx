import Link from 'next/link';
import React from 'react';

const CustomLinkButton: React.FC<{ href: string }> = ({ children, href }) => {
  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="w-auto px-6 py-2 text-base font-medium leading-6 text-white transition duration-300 ease-in-out bg-purple-600 border border-transparent rounded-md hover:bg-purple-700 focus:outline-none focus:border-purple-900 focus:shadow-outline-purple md:py-3 md:text-lg md:px-8">
        {children}
      </a>
    </Link>
  );
};

export default CustomLinkButton;
