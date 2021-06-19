import Cleave from "cleave.js/react";
import styled from "styled-components";

export const NumberInput = styled(Cleave)`
  padding: 1.5rem 1rem 1rem 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: none;
  background: ${(props) => props.theme.colors.lightGrey};
`;
