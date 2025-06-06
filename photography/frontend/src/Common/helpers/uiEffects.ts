import { RefObject } from "react";

export const scrollToRefObject = (refObject: RefObject<HTMLDivElement | null>) => {
  const header = document.querySelector('header.container') as HTMLElement | null;
  const headerHeight = header?.offsetHeight ?? 0;
  const offsetTop = refObject.current?.offsetTop ?? 0;
  window.scrollTo({ top: offsetTop - headerHeight, behavior: 'smooth' });
};
