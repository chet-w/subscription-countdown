import { motion } from "framer-motion";
import styled from "styled-components";

export const Notification = styled(motion.article)`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  width: 240px;
  background: ${(props) => props.theme.colors.white};
`;
