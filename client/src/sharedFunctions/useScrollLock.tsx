import { useEffect } from 'react';

export const useScrollLock = (locked: boolean) => {
  useEffect(() => {
    const body = document.body;

    if (locked) {
      const scrollY = window.scrollY; // save current scroll position
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
    } else {
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      if (scrollY) {
        // restore scroll position
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    };
  }, [locked]);
};
