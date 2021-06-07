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

  const [isActive, setIsActive] = useState(false);
  const [field, meta] = useField(otherProps);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsActive(Boolean(event.target.value !== ""));
  };

  return (
    // <S.InputContainer>
    //   <Label isActive={isActive} htmlFor={slugify(props.name)}>
    //     {label}
    //   </Label>
    //   <S.Input
    //     {...field}
    //     {...props}
    //     id={slugify(props.name)}
    //     onFocus={() => setIsActive(true)}
    //     onBlur={(event) => handleBlur(event)}
    //     aria-invalid={meta.touched && meta.error ? true : false}
    //     aria-describedby={`feedback-${slugify(props.name)}`}
    //   />
    //   <AnimatePresence>
    //     {meta.touched && meta.error && (
    //       <Feedback id={`feedback-${slugify(props.name)}`}>
    //         {meta.error}
    //       </Feedback>
    //     )}
    //   </AnimatePresence>
    // </S.InputContainer>
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {/* {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null} */}
    </>
  );
}
