import styled from "styled-components";
import { StyledLabelProps } from "./types";

export const Label = styled.label<StyledLabelProps>`
  position: absolute;
  color: ${(props) => props.theme.colors.grey};
  font-size: 1rem;
  top: 1.25rem;
  left: 1rem;
  transition: all 0.2s ease;
  transform: ${(props) =>
    props.isActive ? "translate3d(-0.75rem, -0.8rem, 0) scale(0.75)" : "none"};
  color: ${(props) =>
    props.isValid ? props.theme.colors.success : props.theme.colors.danger};
`;
