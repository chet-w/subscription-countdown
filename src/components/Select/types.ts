import { HTMLAttributes } from "react";

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  options: Option[];
  label: string;
  valid?: boolean;
  error?: string;
  name: string;
}

export interface Option {
  label: string;
  value: string;
}