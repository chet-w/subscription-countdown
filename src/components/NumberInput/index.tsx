import slugify from "slugify";
import { ReactElement } from "react";
import { useField } from "formik";
import { AnimatePresence } from "framer-motion";
import { InputContainer } from "../Input/styles";
import { Label } from "../Label";
import Feedback from "../Feedback";
import { NumberInputProps } from "./types";
import * as S from "./styles";

export function NumberInput(props: NumberInputProps): ReactElement {
  const { label, ...otherProps } = props;

  const [field, meta] = useField(otherProps);

  return (
    <InputContainer>
      <Label
        isActive
        isValid={!Boolean(meta.error)}
        htmlFor={slugify(props.name)}
      >
        {label}
      </Label>
      <S.NumberInput
        options={{ numeral: true, numeralThousandsGroupStyle: "thousand" }}
        {...field}
        value={field.value}
        {...otherProps}
        id={slugify(props.name)}
      />
      <AnimatePresence>
        {meta.touched && meta.error && (
          <Feedback id={`feedback-${slugify(props.name)}`}>
            {meta.error}
          </Feedback>
        )}
      </AnimatePresence>
    </InputContainer>
  );
}
