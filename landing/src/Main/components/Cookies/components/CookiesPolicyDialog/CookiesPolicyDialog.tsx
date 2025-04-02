import { FC } from "react";
import ModalDialog from "../../../../../Common/components/ModalDialog/ModalDialog";
import { DialogController } from "../../../../../Common/components/ModalDialog/model/DialogController";

interface CookiesPolicyDialogProps {
  dialog: DialogController
}

const CookiesPolicyDialog: FC<CookiesPolicyDialogProps> = ({ dialog }) => {
  return (
    <ModalDialog dialog={dialog}>
      <section>
        <h2>Our Cookie Policy</h2>
        <p>
          This page does not store any cookies. The cookies toaster is
          there only to demonstrate how it would look like, if there
          were a cookie policy.
        </p>
      </section>
    </ModalDialog>
  )
}

export default CookiesPolicyDialog;
