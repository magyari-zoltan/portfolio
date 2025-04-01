import './Footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="informations">
      <p className="info">
        <strong>Copyright</strong> &copy; 2025 Magyari Zoltán
      </p>
      <p className="info">
        <strong>Email: </strong>
        <a
          className="email"
          href="mailto:magyari.zoltan@protonmail.com">magyari.zoltan@protonmail.com</a>
      </p>
      <p className="info">
        <strong>Mobile:</strong> +40 746 964 062
      </p>
      <p className="info">
        <strong>App version:</strong> 1.0
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
        <i className="fa-solid fa-circle-arrow-up"></i >
      </a>
    </div>
  </footer>
)

export default Footer;
