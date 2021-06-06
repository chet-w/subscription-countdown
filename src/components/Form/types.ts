import { HTMLAttributes, ReactElement } from "react";

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
  children: ReactElement | ReactElement[];
};