import { FC } from "react";
import { Camera, Instagram, Facebook } from 'lucide-react';
import { useScrollObserver } from "../../hooks/useScrollObserver";
import { useHeaderNavItems } from "./helpers/useHeaderNavItems";
import "./index.css";

interface HeaderProps {
  selected: "My work" | "Contact";
  title: string;
  basePath: string;
}

const Header: FC<HeaderProps> = ({ basePath, title, selected }) => {
  const navItems = useHeaderNavItems();
  const { topReached } = useScrollObserver();
  console.debug(navItems, "top reached:", topReached);

  return (
    <header className={`container ${topReached ? 'top' : ''}`}>
      <nav className="container">
        {
          navItems.map(
            navItem => (
              <a
                className={`nav-item link ${selected === navItem.name ? 'selected' : ''}`}
                key={`${navItem.href}`}
                href={`${basePath}/${navItem.href}`}
              >
                {navItem.name}
              </a>
            )
          )
        }
      </nav>

      <h1 className={`title ${!title ? 'hidden' : ''}`}>{title}</h1>

      <div className="social-media">
        <Camera />
        <Instagram />
        <Facebook />
      </div>
    </header >
  )
}

export default Header;
