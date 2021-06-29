import { motion } from "framer-motion";
import styled from "styled-components";
import { NotificationProps } from "./types";

export const Notification = styled(motion.article)<Partial<NotificationProps>>`
  min-width: 240px;
  padding: 2rem;
  border-radius: 0.5rem;
  color: ${props => props.theme.colors[props.variant!].base};
  background: ${props => props.theme.colors[props.variant!].light};
  font-weight: bold;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  & svg {
    margin-right: 0.5rem;
  }
`;
