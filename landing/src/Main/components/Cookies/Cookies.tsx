import './Cookies.css'
import Toaster from '../../../Common/components/Toaster/Toaster';

const Cookies = () => (
  <Toaster>
    <span className="message">
      Cookies help us to deliver best user exprience on
      our website. By using the website, you agree the use
      of cookies.
      <a href="#" className="link-to-cookie-usage">
        Find out how we use cookies.
      </a>
    </span>
  </Toaster>
)

export default Cookies;
