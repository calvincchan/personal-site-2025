import Image from 'next/image';
import React from 'react';

const SupabaseIcon: React.FC<{ className: string; }> = (props) => {
  return (
    <Image src="/images/supabase--light.svg" width={120} height={0} alt="Supabase Logo" {...props} />
  );
};

export default SupabaseIcon;
