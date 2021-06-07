import { HTMLAttributes, HTMLProps } from "react";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  valid?: boolean;
  error?: string;
  name: string;
  value: string;
}