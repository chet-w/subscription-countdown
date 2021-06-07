import { createContext, ReactElement } from "react";
import { useFormik } from "formik";
import { FormProps, FormProviderProps } from "./types";
import * as S from "./styles";

const FormikContext = createContext({});

export function FormProvider(props: FormProviderProps): ReactElement {
  const { children, ...otherProps } = props;
  const formikStateAndHelpers = useFormik(otherProps);

  return (
    <FormikContext.Provider value={formikStateAndHelpers}>
      {typeof children === "function"
        ? children(formikStateAndHelpers)
        : children}
    </FormikContext.Provider>
  );
}

export function Form(props: FormProps): ReactElement {
  const { children, ...otherProps } = props;
  return (
    <S.Form {...otherProps}>
      <>{props.children}</>
    </S.Form>
  );
}
