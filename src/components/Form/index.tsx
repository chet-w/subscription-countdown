import { createContext, ReactElement } from "react";
import { useFormik } from "formik";
import { FormProps } from "./types";
import * as S from "./styles";

const FormikContext = createContext({});

export function Form(props: FormProps): ReactElement {
  const { children, ...otherProps } = props;
  const formikStateAndHelpers = useFormik(otherProps);

  return (
    <FormikContext.Provider value={formikStateAndHelpers}>
      <S.Form>
        <>
          {typeof children === "function"
            ? children(formikStateAndHelpers)
            : children}
        </>
      </S.Form>
    </FormikContext.Provider>
  );
}
