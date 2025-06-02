import { useEffect, useState } from 'react';

export type ScrollState = {
  scrollTop: number;
  topReached: boolean;
  bottomReached: boolean;
}

export const useScrollObserver = () => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollTop: 0,
    topReached: true,
    bottomReached: false,
  });
  console.debug(scrollState);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      setScrollState({
        scrollTop,
        topReached: !scrollTop,
        bottomReached: (scrollTop + windowHeight >= fullHeight - 1)
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollState;
}
