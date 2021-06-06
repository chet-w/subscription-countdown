import styled from "styled-components";

export const Select = styled.select`
  padding: 1.5rem 1rem 1rem calc(1rem - 5px);
  font-size: 1rem;
  border-radius: 0.5rem;
  border: none;
  background: ${(props) => props.theme.colors.lightGrey};
`;
