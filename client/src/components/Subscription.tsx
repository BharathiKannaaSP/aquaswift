import React from 'react';
import AnimatedTitle from '../animations/AnimatedTitle';
import AnimatedButton from '../animations/AnimatedButton';

const Subscription = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Background image */}
      <img
        src="https://cdn.prod.website-files.com/679d8b01c23ed7847fc5108f/6824fdec131ae13dc2118401_cta_photo-p-2000.avif"
        alt="subscriptionImg"
        className="w-full h-full object-cover"
      />

      {/* Centered animated title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-1/2 md:left-1/4 px-4 z-10">
        <AnimatedTitle
          variant="light"
          id="subscription"
          title="Backed by Data. Built for Complexity. Designed for You."
          className="text-2xl md:text-4xl lg:text-6xl"
        />
        <div className="w-full lg:w-1/2">
          <span className="text-sm text-main-bg ">
            Join the Waitlist for early access, founding member benefits, and exclusive launch
            offers.
          </span>
          <AnimatedButton label="Join Waitlist" variant="light" size="md" containerClass="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
