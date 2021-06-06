import { ReactElement } from "react";
import { AnimatePresence } from "framer-motion";
import { InputProps } from "./types";
import * as S from "./styles";
import { variants } from "./animations";

export function Input(props: InputProps): ReactElement {
  return (
    <S.InputContainer>
      <S.Input {...props} />
      <AnimatePresence>
        {props.valid && (
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
}
