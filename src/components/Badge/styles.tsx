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
  background: ${(props) => props.theme.colors.successLight};
  color: ${(props) => props.theme.colors.success};
`;

export const Info = styled(Badge)`
  background: ${(props) => props.theme.colors.infoLight};
  color: ${(props) => props.theme.colors.info};
`;

export const Warning = styled(Badge)`
  background: ${(props) => props.theme.colors.warningLight};
  color: ${(props) => props.theme.colors.warning};
`;

export const Danger = styled(Badge)`
  background: ${(props) => props.theme.colors.dangerLight};
  color: ${(props) => props.theme.colors.danger};
`;
