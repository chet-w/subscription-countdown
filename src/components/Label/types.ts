import { HTMLAttributes } from "react";

export interface LabelProps extends StyledLabelProps {
  children: string;
}

export interface StyledLabelProps extends HTMLAttributes<HTMLLabelElement> {
  isActive: boolean;
  isValid?: boolean;
}