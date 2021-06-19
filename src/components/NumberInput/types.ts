import { HTMLAttributes } from "react";

export interface NumberInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
};