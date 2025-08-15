import React from 'react';
import RotateImages from './RotateImages';
import AnimatedTitle from './AnimatedTitle';

const AnimatedSlogan = ({ sloganText }: { sloganText: string[] | undefined | null }) => {
  return (
    <div className={sloganText?.[0] ? 'px-8 py-12' : 'px-8'}>
      {sloganText?.[0] && (
        <div className="flex items-center gap-2 max-w-sm">
          <RotateImages src="https://cdn.prod.website-files.com/679d8b01c23ed7847fc5108f/681a2619e6b380d91859ec5a_icon_shape.png" />
          <span className="text-xs uppercase font-semibold">{sloganText?.[0]}</span>
        </div>
      )}
      <div className="mt-12 text-xl sm:text-4xl lg:text-6xl xl:text-8xl xl:tracking-tighter max-w-5xl">
        <AnimatedTitle variant="dark" id="slogan-1" title={sloganText?.[1]} />
      </div>
    </div>
  );
};

export default AnimatedSlogan;
