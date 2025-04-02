import './Cookies.css'
import Toaster from '../../../Common/components/Toaster/Toaster';
import CookiesPolicyDialog from './components/CookiesPolicyDialog/CookiesPolicyDialog';
import { useDialogController } from '../../../Common/components/ModalDialog/hooks/useDialogController';

const Cookies = () => {
  const dialog = useDialogController();

  return (
    <Toaster>
      <span className="message">
        Cookies help us to deliver best user exprience on
        our website. By using the website, you agree the use
        of cookies. <a
          href="#"
          className="link-to-cookie-usage"
          onClick={dialog.show}>
          Find out how we use cookies.
        </a>
      </span>

      <CookiesPolicyDialog dialog={dialog} />
    </Toaster>
  )
}

export default Cookies;
