import { ReactElement } from "react";

export interface ModalProps {
  title: string;
  id: string;
  children: ReactElement | ReactElement[];
}