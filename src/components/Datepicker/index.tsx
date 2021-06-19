import { ReactElement } from "react";
import { useField } from "formik";
import { AnimatePresence } from "framer-motion";
import slugify from "slugify";
import { Label } from "../Label";
import * as S from "./styles";
import { DatepickerProps } from "./types";
import Feedback from "../Feedback";
import { format } from "date-fns";

export function Datepicker(props: DatepickerProps): ReactElement {
  const { label, ...otherProps } = props;

  const [field, meta] = useField(otherProps);

  return (
    <S.DatepickerContainer>
      <Label
        isActive
        isValid={!Boolean(meta.error)}
        htmlFor={slugify(props.name)}
      >
        {label}
      </Label>
      <input
        type="date"
        {...field}
        value={field.value ? format(new Date(field.value), "yyyy-MM-dd") : ""}
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
    </S.DatepickerContainer>
  );
}
