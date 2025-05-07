import Image from 'next/image';
import React from 'react';

const NextJsIcon: React.FC<{ className: string; }> = (props) => {
  return (
    <Image src="/images/nextjs--light.svg" width={90} height={0} alt="Next.js Logo" {...props} />
  );
};

export default NextJsIcon;
