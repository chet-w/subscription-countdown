import { motion } from "framer-motion";
import styled from "styled-components";
import { NotificationProps } from "./types";

export const Notification = styled(motion.article)<Partial<NotificationProps>>`
  width: 240px;
  padding: 2rem;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors[props.variant!]};
  background: ${(props) => props.theme.colors.white};
  font-weight: bold;
  margin-bottom: 1rem;
`;
