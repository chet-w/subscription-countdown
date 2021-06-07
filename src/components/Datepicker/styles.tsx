import styled from "styled-components";
import { InputContainer } from "../Input/styles";

export const DatepickerContainer = styled(InputContainer)`
  input {
    padding: 1.5rem 1rem 1rem 1rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    border: none;
    background: ${(props) => props.theme.colors.lightGrey};
    width: 100%;
  }
`;
