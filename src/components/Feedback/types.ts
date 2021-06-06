import { HTMLAttributes } from "react";

export interface FeedbackProps extends HTMLAttributes<HTMLDivElement> {
  children?: string;
}