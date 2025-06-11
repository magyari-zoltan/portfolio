import { useScrollObserver } from "../../hooks/useScrollObserver";
import "./index.css"
import { FC, RefObject } from "react";

interface FooterProps {
  mainRef: RefObject<HTMLElement | null>;
  frontendServerPath: string;
}

const Footer: FC<FooterProps> = ({ mainRef, frontendServerPath }) => {
  const { bottomReached } = useScrollObserver(mainRef);

  return (
    <footer className={`container ${bottomReached ? 'bottom' : ''}`}>
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
}

export default Footer;
