import { useScrollObserver } from "../../../../Common/hooks/useScrollObserver"

const HORIZONTAL_BREAK_POINT = 800;

export const useTitleOpacity = (width: number) => {
  const { scrollTop } = useScrollObserver();
  let titleBottomPosition = 400;
  if (width < HORIZONTAL_BREAK_POINT) {
    titleBottomPosition = 200;
  }

  if (scrollTop < titleBottomPosition) {
    console.debug('Title bottom position', (titleBottomPosition - scrollTop) / titleBottomPosition);
    return (titleBottomPosition - scrollTop) / titleBottomPosition;
  }
  return 0;
}
