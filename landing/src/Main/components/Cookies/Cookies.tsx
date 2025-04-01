import { useState } from 'react';
import './Cookies.css'

const Cookies = () => {
  const [show, setShow] = useState('show');

  return (
    <section className={`dialog dialog-float cookies-toaster ${show}`} >
      <button
        className="dialog-x-button button button-float"
        onClick={() => setShow('')}>
        ×
      </button>

      <span className="message">
        Cookies help us to deliver best user exprience on
        our website. By using the website, you agree the use
        of cookies.
        <a href="#" className="link-to-cookie-usage">
          Find out how we use cookies.
        </a>
      </span>
    </section >
  )
}

export default Cookies;
