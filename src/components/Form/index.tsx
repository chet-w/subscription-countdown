import { ReactElement } from "react";
import { FormProps } from "./types";
import * as S from "./styles";

export function Form(props: FormProps): ReactElement {
  const { children, ...otherProps } = props;
  return (
    <S.Form {...otherProps}>
      <>{props.children}</>
    </S.Form>
  );
}
