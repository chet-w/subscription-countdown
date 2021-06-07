import { ReactElement, useState } from "react";
import { useField } from "formik";
import { AnimatePresence } from "framer-motion";
import slugify from "slugify";
import { InputProps } from "./types";
import * as S from "./styles";
import { Label } from "../Label";
import Feedback from "../Feedback";

export function Input(props: InputProps): ReactElement {
  const { label, ...otherProps } = props;

  const [field, meta] = useField(otherProps);
  const [isActive, setIsActive] = useState(Boolean(field.value));

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsActive(Boolean(event.target.value !== ""));
    field.onBlur(event);
  };

  return (
    <S.InputContainer>
      <Label
        isActive={isActive}
        isValid={!Boolean(meta.error)}
        htmlFor={slugify(props.name)}
      >
        {label}
      </Label>
      <S.Input
        {...field}
        {...otherProps}
        id={slugify(props.name)}
        onFocus={() => setIsActive(true)}
        onBlur={(event) => handleBlur(event)}
        aria-invalid={meta.touched && meta.error ? true : false}
        aria-describedby={`feedback-${slugify(props.name)}`}
      />
      <AnimatePresence>
        {meta.touched && meta.error && (
          <Feedback id={`feedback-${slugify(props.name)}`}>
            {meta.error}
          </Feedback>
        )}
      </AnimatePresence>
    </S.InputContainer>
  );
}
