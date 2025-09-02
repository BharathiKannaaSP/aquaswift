import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import SingleProductCategories from '../components/SingleProductCategories';
import { useLocation } from 'react-router';
import AnimatedTitle from '../animations/AnimatedTitle';
import { ArrowDownAnimation } from '../animations/ArrowAnimations';
import { useScrollToTop } from '../sharedFunctions/useScrollToTop';

const Products = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitPathName = pathname.split('/')[2];
  useScrollToTop();
  return (
    <>
      <div className="w-full h-screen relative">
        <div className="absolute transform top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 z-10 text-center text-main-bg">
          <AnimatedTitle
            className="text-4xl lg:text-8xl"
            title={splitPathName}
            id="products"
            variant="light"
          />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quas molestiae
            laboriosam
          </span>
          <div className="mt-20 flex flex-col justify-center items-center">
            <p className="text-3xl">Scroll down</p>
            <ArrowDownAnimation />
          </div>
        </div>

        <VideoPlayer
          playIcon={false}
          className="w-full h-full object-cover rounded-none brightness-75"
          src="https://videos.pexels.com/video-files/3121327/3121327-uhd_2560_1440_24fps.mp4"
        />
      </div>
      <SingleProductCategories />
    </>
  );
};

export default Products;
