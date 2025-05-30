import { useEffect, useState } from 'react';

export const useScrollObserver = () => {
  const [bottomReached, setBottomReached] = useState(false);
  const [topReached, setTopReached] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      setBottomReached(scrollTop + windowHeight >= fullHeight - 1);
      setTopReached(!scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    topReached,
    bottomReached
  }
}
