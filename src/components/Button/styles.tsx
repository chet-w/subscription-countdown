import styled from "styled-components";

const BaseButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
`;

export const SecondaryButton = styled(BaseButton)`
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
`;

export const TertiaryButton = styled(BaseButton)`
  background: transparent;
  color: ${(props) => props.theme.colors.primary};
`;
