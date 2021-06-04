import styled from "styled-components";
import { motion } from "framer-motion";

export const Backdrop = styled(motion.div)`
  position: fixed;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
`;
