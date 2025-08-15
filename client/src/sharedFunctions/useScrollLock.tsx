import { useEffect } from 'react';

export const useScrollLock = (locked: boolean) => {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (locked) {
      html.classList.add('overflow-hidden');
      body.classList.add('overflow-hidden');
    } else {
      html.classList.remove('overflow-hidden');
      body.classList.remove('overflow-hidden');
    }

    // ✅ Cleanup on unmount to prevent stuck scroll
    return () => {
      html.classList.remove('overflow-hidden');
      body.classList.remove('overflow-hidden');
    };
  }, [locked]);
};
