import { useEffect, useState, RefObject } from 'react';

export const useResizeObserver = (ref: RefObject<HTMLDivElement | null>) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const onResize = () => {
      if (ref.current) {
        setWidth(ref.current.getBoundingClientRect().width);
        setHeight(ref.current.getBoundingClientRect().height);
      }
    }
    onResize();

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);

  }, []);

  return { width, height }
};

