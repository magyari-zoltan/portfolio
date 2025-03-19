import { useRef } from 'react';
import { useClassNameLogic } from './hooks/useClassNameLogic';
import TogglerMenu from './components/TogglerMenu/TogglerMenu';
import NavMenu from './components/NavMenu/NavMenu';
import './Header.css'

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const navmenuRef = useRef<HTMLUListElement>(null);
  const { dynamic_navmenu, toggleNavmenu } = useClassNameLogic(headerRef, navmenuRef);

  return (
    <header ref={headerRef}>
      <nav className="navbar">
        <article className="signature-container">
          <span className="signature-logo">MZ</span>
          <h2 className="signature-name">Magyari Zoltán</h2>
        </article>

        <TogglerMenu onToggle={toggleNavmenu} />
        <NavMenu ref={navmenuRef} dynamicClassName={dynamic_navmenu} />
      </nav>
    </header >
  )
};

export default Header;
