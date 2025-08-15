import React from 'react';

const RotateImages = ({ src }: { src: string }) => {
  return <img src={src} alt="spinning_img" className="animate-spin-img w-10 h-10" />;
};

export default RotateImages;
