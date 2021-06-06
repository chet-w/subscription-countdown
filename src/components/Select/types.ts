import { HTMLAttributes } from "react";

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

export interface Option {
  label: string;
  value: string;
}