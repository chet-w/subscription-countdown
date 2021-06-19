import { HTMLAttributes } from "react";

export interface NumberProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
};