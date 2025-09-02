import { IoIosArrowRoundUp } from 'react-icons/io';
import React, { useEffect, useRef } from 'react';
import { IoArrowDown } from 'react-icons/io5';
import gsap from 'gsap';

export const ArrowAnimation = React.memo(({ color }: { color: string }) => (
  <>
    <IoIosArrowRoundUp
      className={`absolute rotate-45 text-${color} transition-all duration-700 group-hover:translate-x-12 group-hover:-translate-y-12 group-hover:opacity-0`}
      size={40}
    />
    <IoIosArrowRoundUp
      className={`absolute rotate-45 text-${color} -translate-x-5 translate-y-5 opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100`}
      size={40}
    />
  </>
));

export const ArrowDownAnimation = () => {
  const arrowRef = useRef(null);
  useEffect(() => {
    gsap.to(arrowRef.current, {
      y: 50,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <div className="flex justify-center">
      <div ref={arrowRef}>
        <IoArrowDown size={40} />
      </div>
    </div>
  );
};
