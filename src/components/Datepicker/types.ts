import { HTMLAttributes } from "react";

export interface DatepickerProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
};
