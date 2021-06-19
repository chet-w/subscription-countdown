import slugify from "slugify";
import { ChangeEvent, ReactElement } from "react";
import { useField, useFormikContext } from "formik";
import { AnimatePresence } from "framer-motion";
import { InputContainer } from "../Input/styles";
import { Label } from "../Label";
import Feedback from "../Feedback";
import { NumberInputProps } from "./types";
import * as S from "./styles";

export function NumberInput(props: NumberInputProps): ReactElement {
  const { label, ...otherProps } = props;

  const [field, meta] = useField(otherProps);
  const { handleChange } = useFormikContext();

  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedValue = value.replaceAll(/[,$]/g, "") || "0";
    event.target.value = formattedValue;
    handleChange(event);
  };

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
        options={{
          numeral: true,
          numeralThousandsGroupStyle: "thousand",
          prefix: "$"
        }}
        {...field}
        value={field.value}
        {...otherProps}
        onChange={(event) => handleNumberChange(event)}
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
