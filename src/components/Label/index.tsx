import React, { ReactElement } from "react";
import { LabelProps } from "./types";
import * as S from "./styles";

export function Label(props: LabelProps): ReactElement {
  return <S.Label {...props}>{props.children}</S.Label>;
}
