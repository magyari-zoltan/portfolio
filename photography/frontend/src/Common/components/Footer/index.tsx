import "./index.css"
import { FC } from "react";

interface FooterProps {
  frontendServerPath: string;
}

const Footer: FC<FooterProps> = ({ frontendServerPath }) => (
  <footer className="container">
    <span className="created-by">
      Webpage crated by

    </span>
    <a
      className="portfolio-link"
      href={`${frontendServerPath}`}
    >
      Magyari Zoltán
    </a>
  </footer>
)

export default Footer;
