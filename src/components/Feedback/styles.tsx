import styled from "styled-components";
import { motion } from "framer-motion";

export const Feedback = styled(motion.div)`
  font-size: 0.75rem;
  font-weight: bold;
  position: absolute;
  top: calc(100% + 0.25rem);
  color: ${(props) => props.theme.colors.danger};
`;
