import { ReactElement } from "react";
import { InputContainer } from "../Input/styles";
import { SelectProps } from "./types";
import * as S from "./styles";
import { Label } from "../Label";

export function Select(props: SelectProps): ReactElement {
  return (
    <InputContainer>
      <Label isActive>{props.label}</Label>
      <S.Select {...props}>
        <option value=""></option>
        {props.options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </S.Select>
    </InputContainer>
  );
}
