import { HTMLAttributes, ReactElement } from "react";
import { FormikConfig, FormikValues } from "formik";

export interface FormProviderProps extends FormikConfig<FormikValues> {
  children: ReactElement | ReactElement[] | Function;
};

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
  children: ReactElement | ReactElement[]
}