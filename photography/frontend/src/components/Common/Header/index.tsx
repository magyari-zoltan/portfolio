import { FC } from "react";
import { Camera, Instagram, Facebook } from 'lucide-react';
import "./index.css";

interface HeaderProps {
  selected: string;
  basePath: string;
  navItems: {
    name: string;
    href: string;
  }[];
}

const Header: FC<HeaderProps> = ({ basePath, selected, navItems }) => (
  <header className="container">
    <nav className="container">
      {
        navItems.map(
          navItem => (
            <a
              className={`nav-item ${selected === navItem.name ? 'selected' : ''}`}
              key={`${navItem.href}`}
              href={`${basePath}/${navItem.href}`}
            >
              {navItem.name}
            </a>
          )
        )
      }
    </nav>

    <h1 className="title">My Photography</h1>

    <div className="social-media">
      <Camera />
      <Instagram />
      <Facebook />
    </div>
  </header >
)

export default Header;
