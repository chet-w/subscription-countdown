import Cleave from "cleave.js/react";
import { useField } from "formik";
import { AnimatePresence } from "framer-motion";
import { ReactElement } from "react";
import slugify from "slugify";
import Feedback from "../Feedback";
import { InputContainer } from "../Input/styles";
import { Label } from "../Label";
import { NumberProps } from "./types";

export function Number(props: NumberProps): ReactElement {
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
      <Cleave
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
