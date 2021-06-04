import { ReactElement } from "react";
import { ButtonProps } from "./types";
import * as S from "./styles";

export function Button(props: ButtonProps): ReactElement {
  const { variant, children, ...otherProps } = props;
  switch (variant) {
    case "primary":
      return <S.PrimaryButton {...otherProps}>{children}</S.PrimaryButton>;
    case "secondary":
      return <S.PrimaryButton {...otherProps}>{children}</S.PrimaryButton>;
    case "tertiary":
      return <S.PrimaryButton {...otherProps}>{children}</S.PrimaryButton>;
  }
}
