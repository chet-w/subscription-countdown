import styled from "styled-components";

export const Service = styled.button`
  padding: 1rem;
  background: #fafafa;
  width: 360px;
  border-radius: 1rem;
  border: none;
  display: block;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Image = styled.img`
  height: 96px;
  width: 96px;
  border-radius: 1rem;
`;

export const SpacedBetweenRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
