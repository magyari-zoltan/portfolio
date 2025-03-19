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
        <a href="#" className="navlink">Home</a>
      </li>
      <li className="navitem">
        <a href="#about" className="navlink">About</a>
      </li>
      <li className="navitem">
        <a href="#portfolio" className="navlink">Portfolio</a>
      </li>
      <li className="navitem">
        <a href="#contact" className="navlink">Contact</a>
      </li>
    </ul>
  )
}

export default NavMenu;
