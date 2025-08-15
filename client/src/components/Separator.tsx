import React from 'react';

const Separator = ({ variant }: { variant: 'light' | 'dark' }) => {
  return (
    <div
      className={`${variant === 'dark' ? 'text-black' : 'text-white'} w-full border border-dashed`}
    />
  );
};

export default Separator;
