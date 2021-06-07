import { ReactElement } from "react";
import { FormikConfig, FormikValues } from "formik";

export interface FormProps extends FormikConfig<FormikValues> {
  children: ReactElement | ReactElement[] | Function;
};