import { ForwardedRef, forwardRef, ReactElement } from "react";
import { AnimatePresence } from "framer-motion";
import { InputContainer } from "../Input/styles";
import { SelectProps } from "./types";
import * as S from "./styles";
import { Label } from "../Label";
import Feedback from "../Feedback";

export const Select = forwardRef(function (
  props: SelectProps,
  ref: ForwardedRef<HTMLSelectElement>
): ReactElement {
  return (
    <InputContainer>
      <Label isActive isValid={props.valid}>
        {props.label}
      </Label>
      <S.Select {...props} ref={ref}>
        <option value=""></option>
        {props.options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </S.Select>
      <AnimatePresence>
        {!props.valid && <Feedback>{props.error}</Feedback>}
      </AnimatePresence>
    </InputContainer>
  );
});
