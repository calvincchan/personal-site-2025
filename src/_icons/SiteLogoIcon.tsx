import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SiteLogoIcon: React.FC<{ size: number; }> = ({ size = 100 }) => {
  return (
    <Link href="/" title="Home | Calvin C Chan">
      <Image src="/logo.svg" alt="Calvin C Chan Logo" width={size} height={size} />
    </Link>
  );
};

export default SiteLogoIcon;
