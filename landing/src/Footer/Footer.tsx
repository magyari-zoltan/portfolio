import { useScrollObserver } from '../Common/hooks/useScrollObserver';
import './Footer.css'

const Footer = () => {
  const { topReached, bottomReached } = useScrollObserver();
  const detachedArrow = bottomReached ? '' : 'detached-from-footer';
  const hiddenArrow = topReached ? 'hidden' : '';

  return (
    <footer className="footer">
      <div className="informations">
        <p className="info">
          <strong>Copyright</strong> &copy; 2025 Magyari Zoltán
        </p>
        <p className="info">
          <strong>Email: </strong>
          <a
            className="email"
            href="mailto:magyari.zoltan@outlook.com">magyari.zoltan@outlook.com</a>
        </p>
        <p className="info">
          <strong>Mobile:</strong> +40 750 686 104
        </p>
        <p className="info">
          <strong>App version:</strong> 1.1
        </p>
      </div>

      <div className="navicons">
        <a href="https://github.com/magyari-zoltan" className="navicon">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/zoltan-magyari" className="navicon">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="#" className="navicon">
          <i className={`fa-solid fa-circle-arrow-up ${detachedArrow} ${hiddenArrow}`}></i >
        </a>
      </div>
    </footer>
  )
}

export default Footer;
