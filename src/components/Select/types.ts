import { HTMLAttributes } from "react";

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  options: Option[];
  label: string;
}

export interface Option {
  label: string;
  value: string;
}