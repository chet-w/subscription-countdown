import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
`;

export const Input = styled.input`
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  background: ${(props) => props.theme.colors.lightGrey};
`;
