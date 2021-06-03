import styled from "styled-components";

const Badge = styled.div`
  display: inline-block;
  padding: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.65rem;
  border-radius: 0.25rem;
`;

export const Success = styled(Badge)`
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.success};
`;

export const Info = styled(Badge)`
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.success};
`;

export const Warning = styled(Badge)`
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.success};
`;

export const Danger = styled(Badge)`
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.success};
`;
