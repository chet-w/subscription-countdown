import { ReactElement } from "react";
import { FeedbackProps } from "./types";
import { variants } from "../Feedback/animations";
import * as S from "./styles";

export default function Feedback(props: FeedbackProps): ReactElement {
  return (
    // @ts-ignore
    <S.Feedback
      variants={variants}
      initial="hidden"
      animate="active"
      exit="hidden"
      {...props}
    >
      {props.children}
    </S.Feedback>
  );
}
