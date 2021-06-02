import styled from "styled-components";
import { StyledHeadingProps } from "./types";

export const H1 = styled.h1<StyledHeadingProps>`
  color: ${(props) =>
    props.accent ? props.theme.colors.primary : props.theme.colors.black};
`;

export const H2 = styled.h2<StyledHeadingProps>`
  color: ${(props) =>
    props.accent ? props.theme.colors.primary : props.theme.colors.black};
`;

export const H3 = styled.h3<StyledHeadingProps>`
  color: ${(props) =>
    props.accent ? props.theme.colors.primary : props.theme.colors.black};
`;

export const H4 = styled.h4<StyledHeadingProps>`
  color: ${(props) =>
    props.accent ? props.theme.colors.primary : props.theme.colors.black};
`;

export const H5 = styled.h5<StyledHeadingProps>`
  color: ${(props) =>
    props.accent ? props.theme.colors.primary : props.theme.colors.black};
`;

export const H6 = styled.h6<StyledHeadingProps>`
  color: ${(props) =>
    props.accent ? props.theme.colors.primary : props.theme.colors.black};
`;
