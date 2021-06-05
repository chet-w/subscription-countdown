import { ReactElement } from "react";
import { InputProps } from "./types";
import * as S from "./styles";

export function Input(props: InputProps): ReactElement {
  return (
    <S.InputContainer>
      <S.Input {...props} />
    </S.InputContainer>
  );
}
