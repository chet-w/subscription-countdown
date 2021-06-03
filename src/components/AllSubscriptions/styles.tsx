import styled from "styled-components";
import { Service } from "../Service/styles";

export const Section = styled.section`
  box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.05);
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
