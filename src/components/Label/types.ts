import { HTMLAttributes } from "react";

export interface LabelProps extends StyledLabelProps {
  children: string;
  htmlFor: string;
}

export interface StyledLabelProps extends HTMLAttributes<HTMLLabelElement> {
  isActive: boolean;
  isValid?: boolean;
}