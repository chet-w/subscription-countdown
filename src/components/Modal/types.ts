import { HTMLAttributes, ReactElement } from "react";

export interface ModalProps {
  title: string;
  id: string;
  children: ReactElement | ReactElement[];
}

export interface FooterOption extends HTMLAttributes<HTMLButtonElement> {
  text: string;
}
