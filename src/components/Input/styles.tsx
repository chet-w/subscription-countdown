import styled from "styled-components";
import { motion } from "framer-motion";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 320px;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  padding: 1.5rem 1rem 1rem 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: none;
  background: ${(props) => props.theme.colors.lightGrey};
`;

export const Error = styled(motion.div)`
  font-size: 0.75rem;
  font-weight: bold;
  position: absolute;
  top: calc(100% + 0.25rem);
  color: ${(props) => props.theme.colors.danger};
`;
