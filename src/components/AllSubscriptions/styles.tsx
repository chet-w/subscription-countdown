import styled from "styled-components";
import { Service } from "../Service/styles";

export const Section = styled.section`
  box-shadow: ${(props) => props.theme.styles.shadow.one};
  padding: 2rem;
  border-radius: 1rem;
`;

export const ServiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${Service} {
    margin-right: 4rem;
    margin-bottom: 4rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  & h2 {
    margin: 0;
  }
`;
