import { RefObject, useEffect, useState } from 'react';

export type ScrollState = {
  scrollTop: number;
  topReached: boolean;
  bottomReached: boolean;
}

export const useScrollObserver = (refObject: RefObject<HTMLElement | null>) => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollTop: 0,
    topReached: true,
    bottomReached: false,
  });
  console.debug(scrollState);

  useEffect(() => {
    const handleScroll = () => {
      if (refObject.current) {
        const scrollTop = refObject.current.scrollTop;
        const windowHeight = refObject.current.clientHeight;
        const fullHeight = refObject.current.scrollHeight;

        setScrollState({
          scrollTop,
          topReached: !scrollTop,
          bottomReached: (scrollTop + windowHeight >= fullHeight - 1)
        });
      }
    };

    if (refObject.current) {
      refObject.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (refObject.current) {
        refObject.current.removeEventListener('scroll', handleScroll);
      }
    }
  }, []);

  return scrollState;
}
