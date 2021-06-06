import { ReactElement } from "react";
import Selector from "react-select";
import { InputContainer } from "../Input/styles";
import { SelectProps } from "./types";

export function Select(props: SelectProps): ReactElement {
  return (
    <InputContainer>
      <Selector options={props.options} />
    </InputContainer>
  );
}
