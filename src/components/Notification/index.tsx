import { ReactElement } from "react";
import { NotificationProps } from "./types";
import * as S from "./styles";
import { variants, transition } from "./animations";

export function Notification(props: NotificationProps): ReactElement {
  return (
    <S.Notification
      variants={variants}
      variant={props.variant}
      transition={transition}
      initial="hidden"
      animate="active"
      exit="hidden"
    >
      {props.variant}: {props.message}
    </S.Notification>
  );
}
