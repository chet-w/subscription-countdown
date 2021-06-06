import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 320px;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  padding: 1.5rem 1rem 1rem 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: none;
  background: ${(props) => props.theme.colors.lightGrey};
`;
