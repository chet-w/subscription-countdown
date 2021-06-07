import { createContext, ReactElement } from "react";
import { useFormik } from "formik";
import { FormProps, FormProviderProps } from "./types";
import * as S from "./styles";

export function Form(props: FormProps): ReactElement {
  const { children, ...otherProps } = props;
  return (
    <S.Form {...otherProps}>
      <>{props.children}</>
    </S.Form>
  );
}
