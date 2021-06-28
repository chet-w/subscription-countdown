import React, { ReactElement } from "react";
import { NotificationProps } from "./types";
import * as S from "./styles";
import { variants } from "./animations";

export function Notification(props: NotificationProps): ReactElement {
  return (
    <S.Notification
      layout="position"
      variants={variants}
      variant={props.variant}
      initial="hidden"
      animate="active"
      exit="hidden"
    >
      {props.variant}: {props.message} {props.id}
      <button onClick={() => props.dismissNotification!(props.id)}>
        Close
      </button>
    </S.Notification>
  );
}
