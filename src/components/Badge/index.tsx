import React, { ReactElement } from "react";
import { BadgeProps } from "./types";
import * as S from "./styles";

export function Badge(props: BadgeProps): ReactElement {
  switch (props.variant) {
    case "success":
      return <S.Success>{props.content}</S.Success>;
    case "info":
      return <S.Info>{props.content}</S.Info>;
    case "warning":
      return <S.Warning>{props.content}</S.Warning>;
    case "danger":
      return <S.Danger>{props.content}</S.Danger>;
  }
}
