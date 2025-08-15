import { ScrollTrigger, SplitText } from 'gsap/all';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
type AnimatedTitleProps = {
  id: string;
  title?: string;
  variant: 'light' | 'dark';
  className?: string;
};
const AnimatedTitle = ({ id, title, className, variant = 'light' }: AnimatedTitleProps) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<SplitText | null>(null);
  const animatedRef = useRef<gsap.core.Timeline | null>(null);

  const splitAndAnimate = () => {
    if (!titleRef.current) return;

    splitRef.current?.revert();

    splitRef.current = new SplitText(titleRef.current, {
      type: 'words,chars',
      wordsClass: 'word',
      charsClass: 'char',
    });

    animatedRef.current?.kill();
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.from(splitRef.current.words, {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: 'power3.out',
    });

    tl.from(
      splitRef.current.chars,
      {
        y: 60,
        opacity: 0,
        stagger: 0.02,
        duration: 0.4,
        ease: 'power2.out',
      },
      '-=0.1',
    );

    animatedRef.current = tl;
  };

  useEffect(() => {
    splitAndAnimate();

    const handleResize = () => {
      ScrollTrigger.refresh();
      splitAndAnimate();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      splitRef.current?.revert();
      animatedRef.current?.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const colorTitle = {
    dark: 'text-black',
    light: 'text-main-bg',
  }[variant];

  return (
    <div
      id={id}
      ref={titleRef}
      className={`whitespace-normal break-normal leading-snug ${className} ${colorTitle}`}
    >
      {title}
    </div>
  );
};

export default AnimatedTitle;
