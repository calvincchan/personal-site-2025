import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SupabaseIcon: React.FC<{ className: string; }> = (props) => {
  return (
    <Link href="https://supabase.com" target="_blank" title="Supabase">
      <Image src="/images/supabase--light.svg" width={120} height={0} alt="Supabase Logo" {...props} />
    </Link>
  );
};

export default SupabaseIcon;
