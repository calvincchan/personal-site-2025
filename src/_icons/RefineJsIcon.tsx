import Image from 'next/image';
import React from 'react';

const RefineJsIcon: React.FC<{ className: string; }> = (props) => {
  return (
    <Image src="/images/refinejs--light.svg" width={100} height={0} alt="Refine.js Logo" {...props} />
  );
};

export default RefineJsIcon;
