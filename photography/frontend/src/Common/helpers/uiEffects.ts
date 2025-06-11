import { RefObject } from "react";

export const scrollToRefObject = (scrollable: RefObject<HTMLElement | null>, scrollTo: RefObject<HTMLElement | null>) => {
  if (!scrollTo.current) { return }
  const offsetTop = scrollTo.current?.offsetTop ?? 0;
  console.debug('offsetTop', offsetTop);

  if (!scrollable.current) { return }
  scrollable.current.scrollTo({ top: offsetTop, behavior: 'smooth' });
};

export const scrollToTop = (scrollable: RefObject<HTMLElement | null>) => {
  if (!scrollable.current) { return }
  scrollable.current.scrollTo({ top: 0, behavior: 'smooth' })
}
