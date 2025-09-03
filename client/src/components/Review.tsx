import React from 'react';
import { FaStar } from 'react-icons/fa6';
import Separator from './Separator';

const Review = () => {
  return (
    <div className="flex flex-col gap-2 items-start mt-4">
      <div className="flex gap-2">
        <img
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
          alt="img_review"
          className="w-12 h-12 object-cover rounded-full"
        />
        <div className="flex flex-col gap-1">
          <span>John Doe</span>
          <span className="flex">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <FaStar key={index} />
              ))}
          </span>
        </div>
      </div>
      <span className="text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi molestias quo velit dicta
        saepe similique eos accusantium adipisci tenetur, error necessitatibus qui, accusamus ex
        consequuntur blanditiis alias unde dolore nostrum.
      </span>
      <Separator variant="dark" />
    </div>
  );
};

export default Review;
