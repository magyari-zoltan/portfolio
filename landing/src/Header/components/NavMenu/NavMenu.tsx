import { RefObject } from "react";
import './NavMenu.css'

interface NavMenuProps {
  ref: RefObject<HTMLUListElement | null>,
  dynamicClassName: string
}

const NavMenu = ({ ref, dynamicClassName }: NavMenuProps) => {

  return (
    <ul
      ref={ref}
      className={`navmenu  ${dynamicClassName}`}
    >
      <li className="navitem">
        <a href="#home" className="navlink" tabIndex={-1}>Home</a>
      </li>
      <li className="navitem">
        <a href="#about" className="navlink" tabIndex={-1}>About</a>
      </li>
      <li className="navitem">
        <a href="#portfolio" className="navlink" tabIndex={-1}>Portfolio</a>
      </li>
      <li className="navitem">
        <a href="#contact" className="navlink" tabIndex={-1}>Contact</a>
      </li>
    </ul>
  )
}

export default NavMenu;
