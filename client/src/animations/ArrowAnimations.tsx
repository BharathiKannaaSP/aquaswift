import { IoIosArrowRoundUp } from 'react-icons/io';
import React from 'react';

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
