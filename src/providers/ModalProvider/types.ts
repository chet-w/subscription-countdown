import { ReactElement } from "react";

export interface ModalContextValues {
  openModal: (modal: ReactElement) => void;
  closeModal: () => void;
  isOpen: boolean;
}

export interface ModalProviderProps {
  children: ReactElement | ReactElement[];
}