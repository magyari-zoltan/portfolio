import { RefObject } from "react";
import './NavMenu.css'

interface NavMenuProps {
  ref: RefObject<HTMLUListElement | null>,
  dynamicClassName: string,
  onClose: () => void
}

const NavMenu = ({ ref, dynamicClassName, onClose }: NavMenuProps) => {

  return (
    <ul
      ref={ref}
      className={`navmenu  ${dynamicClassName}`}>
      <li className="navitem">
        <a
          href="#home"
          className="navlink"
          tabIndex={-1}
          onClick={onClose}>Home</a>
      </li>
      <li className="navitem">
        <a
          href="#about"
          className="navlink"
          tabIndex={-1}
          onClick={onClose}>About</a>
      </li>
      <li className="navitem">
        <a
          href="#portfolio"
          className="navlink"
          tabIndex={-1}
          onClick={onClose}>Portfolio</a>
      </li>
      <li className="navitem">
        <a
          href="#contact"
          className="navlink"
          tabIndex={-1}
          onClick={onClose}>Contact</a>
      </li>
    </ul>
  )
}

export default NavMenu;
