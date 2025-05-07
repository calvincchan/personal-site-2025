import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RefineJsIcon: React.FC<{ className: string; }> = (props) => {
  return (
    <Link href="https://refine.dev" target="_blank" title="Refine.js">
      <Image src="/images/refinejs--light.svg" width={100} height={0} alt="Refine.js Logo" {...props} />
    </Link>
  );
};

export default RefineJsIcon;
