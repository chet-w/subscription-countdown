import { ReactElement } from "react";
import { NotificationProps } from "./types";

export function Notification(props: NotificationProps): ReactElement {
  return (
    <div>
      {props.variant}: {props.message}
    </div>
  );
}
