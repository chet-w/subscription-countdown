import React, { ReactElement, useState } from "react";
import { useField } from "formik";
import slugify from "slugify";
import { AnimatePresence } from "framer-motion";
import { InputContainer } from "../Input/styles";
import { SelectProps } from "./types";
import * as S from "./styles";
import { Label } from "../Label";
import Feedback from "../Feedback";

export function Select(props: SelectProps): ReactElement {
  const { label, options, ...otherProps } = props;

  const [field, meta] = useField(otherProps);
  const [isActive, setIsActive] = useState(Boolean(field.value));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsActive(Boolean(event.target.value !== ""));
    field.onChange(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
    setIsActive(Boolean(event.target.value !== ""));
    field.onBlur(event);
  };

  return (
    <InputContainer>
      <Label
        isActive={isActive}
        isValid={!Boolean(meta.error)}
        htmlFor={slugify(props.name)}
      >
        {props.label}
      </Label>
      <S.Select
        {...field}
        {...otherProps}
        id={slugify(props.name)}
        onFocus={() => setIsActive(true)}
        onChange={event => handleChange(event)}
        onBlur={event => handleBlur(event)}
        aria-invalid={!props.valid}
        aria-describedby={`feedback-${slugify(props.name)}`}
      >
        <option value=""></option>
        {props.options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </S.Select>
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
