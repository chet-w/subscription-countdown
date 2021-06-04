import styled from "styled-components";

export const Section = styled.section`
  box-shadow: ${(props) => props.theme.styles.shadow.one};
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;