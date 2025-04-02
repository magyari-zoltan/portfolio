import { RefObject } from "react"

export type DialogController = {
  ref: RefObject<HTMLDialogElement>;
  show: () => void;
  close: () => void;
}
