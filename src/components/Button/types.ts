import { ButtonHTMLAttributes } from "react";

export type Variants = "primary" | "secondary" | "tertiary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variants;
}
