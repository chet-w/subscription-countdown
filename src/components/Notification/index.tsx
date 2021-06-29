import React, { ReactElement } from "react";
import {
  CheckCircle,
  Lightbulb,
  WarningOctagon,
  XCircle
} from "phosphor-react";
import { NotificationIconProps, NotificationProps } from "./types";
import * as S from "./styles";
import { variants } from "./animations";
import { IconWeight } from "phosphor-react/dist/lib";

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
      <NotificationIcon variant={props.variant} />
      {props.message}
    </S.Notification>
  );
}

export function NotificationIcon(props: NotificationIconProps): ReactElement {
  const ICON_SIZE = 32;
  const ICON_WEIGHT: IconWeight = "light";

  const options = {
    size: ICON_SIZE,
    weight: ICON_WEIGHT
  };

  switch (props.variant) {
    case "success":
      return <CheckCircle {...options} />;
    case "info":
      return <Lightbulb {...options} />;
    case "warning":
      return <WarningOctagon {...options} />;
    case "danger":
      return <XCircle {...options} />;
  }
}
