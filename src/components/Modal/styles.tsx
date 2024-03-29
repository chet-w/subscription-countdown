import styled from "styled-components";
import { motion } from "framer-motion";

export const Modal = styled(motion.article)`
  width: 600px;
  min-height: 480px;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.styles.shadow.one};
  z-index: 1050;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 2rem;
  border-radius: 1rem 1rem 0 0;
`;

export const Body = styled.section`
  padding: 0 2rem 2rem 2rem;
  height: 100%;

  & form {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
