import { ReactElement } from "react";
import * as S from "./styles";
import { NotificationContainerProps } from "./types";

export function NotificationContainer(
  props: NotificationContainerProps
): ReactElement {
  return <S.NotificationContainer>{props.children}</S.NotificationContainer>;
}
