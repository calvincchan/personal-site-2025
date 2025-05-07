import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ReactIcon: React.FC<{ className: string; }> = (props) => {
  return (
    <Link href="https://reactjs.org" target="_blank" title="React">
      <Image src="/images/react--light.svg" width={100} height={0} alt="React Logo" />
    </Link>
  );
};

export default ReactIcon;
