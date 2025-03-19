import { useState } from 'react';

export const useNavmenuController = () => {
  const [isCollapsed, setCollapsed] = useState<boolean>(false);

  function expand() {
    setCollapsed(false);
  }

  function collapse() {
    setCollapsed(true);
  }

  function toggle() {
    setCollapsed(!isCollapsed);
  }

  return {
    expand,
    collapse,
    toggle,
    isCollapsed
  }
}
