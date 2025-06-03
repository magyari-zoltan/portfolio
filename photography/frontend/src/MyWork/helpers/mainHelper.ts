import { RefObject } from "react";

export const handleScrollToAlbums = (albumContainerRef: RefObject<HTMLDivElement | null>) => {
  const header = document.querySelector('header.container') as HTMLElement | null;
  const headerHeight = header?.offsetHeight ?? 0;
  const offsetTop = albumContainerRef.current?.offsetTop ?? 0;
  window.scrollTo({ top: offsetTop - headerHeight, behavior: 'smooth' });
};

