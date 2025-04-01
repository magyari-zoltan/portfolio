import { ReactNode, useState } from 'react';
import './Toaster.css'

interface ToasterProps {
  children?: ReactNode;
}

const Toaster: React.FC<ToasterProps> = ({ children }) => {
  const [show, setShow] = useState('show');

  if (show) {
    return (
      <section className={`dialog dialog-float toaster ${show}`} >
        <button
          className="dialog-x-button button button-float"
          onClick={() => setShow('')}>
          ×
        </button>

        {children}
      </section >
    )
  }

  return (
    <div className="toaster-placeholder">
    </div>
  )
}

export default Toaster;

