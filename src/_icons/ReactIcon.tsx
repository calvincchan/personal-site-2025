import Image from 'next/image';
import React from 'react';

const ReactIcon: React.FC<{ className: string; }> = (props) => {
  return (
    <Image src="/images/react--light.svg" width={100} height={0} alt="React Logo" {...props} />
  );
};

export default ReactIcon;
