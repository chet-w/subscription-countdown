import styled from "styled-components";

export const Service = styled.article`
  padding: 1rem;
  background: #fafafa;
  width: 320px;
  border-radius: 1rem;
`;

export const Image = styled.div`
  height: 96px;
  width: 96px;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.secondary};
`;

export const SpacedBetweenRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
