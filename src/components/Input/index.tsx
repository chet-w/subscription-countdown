import { ForwardedRef, forwardRef, ReactElement, useState } from "react";
import { AnimatePresence } from "framer-motion";
import slugify from "slugify";
import { InputProps } from "./types";
import * as S from "./styles";
import { Label } from "../Label";
import Feedback from "../Feedback";

export function Input(props: InputProps): ReactElement {
  const [isActive, setIsActive] = useState(false);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsActive(Boolean(event.target.value !== ""));
  };

  return (
    <S.InputContainer>
      <Label
        isActive={isActive}
        isValid={props.valid}
        htmlFor={slugify(props.name)}
      >
        {props.label}
      </Label>
      <S.Input
        {...props}
        id={slugify(props.name)}
        onFocus={() => setIsActive(true)}
        onBlur={(event) => handleBlur(event)}
        aria-invalid={!props.valid}
        aria-describedby={`feedback-${slugify(props.name)}`}
      />
      <AnimatePresence>
        {!props.valid && (
          <Feedback id={`feedback-${slugify(props.name)}`}>
            {props.error}
          </Feedback>
        )}
      </AnimatePresence>
    </S.InputContainer>
  );
}
