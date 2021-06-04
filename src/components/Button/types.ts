import { HTMLAttributes } from "react";

export type Variants = "primary" | "secondary" | "tertiary";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: Variants;
}
