import React, { useState, useRef } from 'react';
import { CiPause1, CiPlay1 } from 'react-icons/ci';

const VideoPlayer = ({
  src,
  playIcon,
  className,
}: {
  src: string;
  playIcon: boolean;
  className?: string;
}) => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (play) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlay(!play);
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className={`w-400 h-100 object-cover rounded-lg ${className}`}
        src={src}
        loop
        muted
        autoPlay={!playIcon}
      />
      {playIcon && (
        <div
          onClick={toggleVideo}
          className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2  text-white text-3xl cursor-pointer w-20 h-20 rounded-full border-1 flex items-center justify-center"
        >
          {play ? <CiPause1 /> : <CiPlay1 />}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
