import { FC, ReactNode, } from "react";
import { DialogController } from "./model/DialogController";
import './ModalDialog.css';

interface DialogProps {
  dialog: DialogController,
  children?: ReactNode
}

const ModalDialog: FC<DialogProps> = ({ dialog, children }) => (
  <dialog ref={dialog.ref} className="dialog dialog-float modal">
    <button
      className="dialog-x-button button button-float"
      onClick={() => dialog.close()}>
      ×
    </button>

    <div> {children} </div>
  </dialog>
)

export default ModalDialog;
