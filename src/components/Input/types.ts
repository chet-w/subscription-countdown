import { HTMLAttributes, HTMLProps } from "react";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}