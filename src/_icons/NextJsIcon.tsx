import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NextJsIcon: React.FC<{ className: string; }> = (props) => {
  return (
    <Link href="https://nextjs.org" target="_blank" title="Next.js">
      <Image src="/images/nextjs--light.svg" width={90} height={0} alt="Next.js Logo" {...props} />
    </Link>
  );
};

export default NextJsIcon;
