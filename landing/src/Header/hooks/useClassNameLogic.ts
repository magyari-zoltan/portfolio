import { useEffect, RefObject } from 'react';
import { useNavmenuController } from './useNavmenuController';
import { useResizeObserver } from '../../Common/hooks/useResizeObserver';

export const useClassNameLogic = (
  headerRef: RefObject<HTMLDivElement | null>,
  navmenuRef: RefObject<HTMLUListElement | null>
) => {
  const { width } = useResizeObserver(headerRef);
  const { expand, collapse, toggle, isCollapsed } = useNavmenuController();
  const flexDirRow = navmenuRef.current
    ? window.getComputedStyle(navmenuRef.current).flexDirection === "row"
    : true;

  useEffect(() => {
    if (!flexDirRow) {
      collapse();
    }
  }, [width]);

  function toggleNavmenu() {
    // If flex-direction is row then always expand, otherwise toggle.
    if (flexDirRow) {
      expand();
    } else {
      toggle();
    }
  }

  function getNavmenuVisibilityClass() {
    return isCollapsed ? "" : "show";
  }

  return {
    dynamic_navmenu: getNavmenuVisibilityClass(),
    toggleNavmenu
  }
}
