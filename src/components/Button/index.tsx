import { ReactElement } from "react";
import { ButtonProps } from "./types";
import * as S from "./styles";

export function Button(props: ButtonProps): ReactElement {
  const { variant, children, ...otherProps } = props;
  switch (variant) {
    case "primary":
      return <S.PrimaryButton {...otherProps}>{children}</S.PrimaryButton>;
    case "secondary":
      return <S.SecondaryButton {...otherProps}>{children}</S.SecondaryButton>;
    case "tertiary":
      return <S.TertiaryButton {...otherProps}>{children}</S.TertiaryButton>;
  }
}
