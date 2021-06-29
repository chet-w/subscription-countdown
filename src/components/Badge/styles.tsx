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
  background: ${props => props.theme.colors.success.light};
  color: ${props => props.theme.colors.success.base};
`;

export const Info = styled(Badge)`
  background: ${props => props.theme.colors.info.light};
  color: ${props => props.theme.colors.info.base};
`;

export const Warning = styled(Badge)`
  background: ${props => props.theme.colors.warning.light};
  color: ${props => props.theme.colors.warning.base};
`;

export const Danger = styled(Badge)`
  background: ${props => props.theme.colors.danger.light};
  color: ${props => props.theme.colors.danger.base};
`;
