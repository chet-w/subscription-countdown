import styled from "styled-components";

const BaseButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0 0.5rem;
  transition: all 0.2s ease;

  &:focus {
    outline: 0;
    box-shadow: ${(props) => props.theme.styles.focus};
  }

  &:hover {
    filter: brightness(1.1);
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
