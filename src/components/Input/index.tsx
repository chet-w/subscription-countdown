import { ForwardedRef, forwardRef, ReactElement, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { InputProps } from "./types";
import * as S from "./styles";
import { variants } from "./animations";
import { Label } from "../Label";

export const Input = forwardRef(function (
  props: InputProps,
  ref: ForwardedRef<HTMLInputElement>
): ReactElement {
  const [isActive, setIsActive] = useState(false);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsActive(Boolean(event.target.value !== ""));
  };

  return (
    <S.InputContainer>
      <Label isActive={isActive} isValid={props.valid}>
        {props.label}
      </Label>
      <S.Input
        {...props}
        ref={ref}
        onFocus={() => setIsActive(true)}
        onBlur={(event) => handleBlur(event)}
      />
      <AnimatePresence>
        {!props.valid && (
          <S.Error
            variants={variants}
            initial="hidden"
            animate="active"
            exit="hidden"
          >
            {props.error}
          </S.Error>
        )}
      </AnimatePresence>
    </S.InputContainer>
  );
});
