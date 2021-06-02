import React, { ReactElement } from "react";
import { HeadingProps } from "./types";
import * as S from "./styles";

export function Heading(props: HeadingProps): ReactElement {
  const { children, level, ...otherProps } = props;

  switch (level) {
    case "1":
      return <S.H1 {...otherProps}>{children}</S.H1>;
    case "2":
      return <S.H2 {...otherProps}>{children}</S.H2>;
    case "3":
      return <S.H3 {...otherProps}>{children}</S.H3>;
    case "4":
      return <S.H4 {...otherProps}>{children}</S.H4>;
    case "5":
      return <S.H5 {...otherProps}>{children}</S.H5>;
    case "6":
      return <S.H6 {...otherProps}>{children}</S.H6>;
  }
}
