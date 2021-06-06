import { ReactElement } from "react";
import { InputContainer } from "../Input/styles";
import { SelectProps } from "./types";
import * as S from "./styles";

export function Select(props: SelectProps): ReactElement {
  return (
    <InputContainer>
      <S.Select {...props}>
        {props.options.map(({ value, label }) => (
          <option value={value}>{label}</option>
        ))}
      </S.Select>
    </InputContainer>
  );
}
