import { ReactElement } from "react";

export interface HeadingProps extends StyledHeadingProps {
  level: "1" | "2" | "3" | "4" | "5" | "6";
  children: string;
}

export interface StyledHeadingProps {
  accent?: boolean;
}