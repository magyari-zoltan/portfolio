import { useRef } from "react";
import { doNothing } from "../../../helpers/utils";
import { DialogController } from "../model/DialogController";

export const useDialogController = () => {
  const ref = useRef<HTMLDialogElement | null>(null);

  const show = () => {
    ref.current && 'showModal' in ref.current
      ? ref.current.showModal()
      : doNothing()
  }

  const close = () => {
    ref.current && 'close' in ref.current
      ? ref.current.close()
      : doNothing()
  }

  return {
    ref,
    show,
    close
  } as DialogController
}
