import { ReactElement } from "react";

export interface ModalContextValues {
  openModal: (modal: ReactElement) => void;
  closeModal: () => void;
  isOpen: boolean;
}