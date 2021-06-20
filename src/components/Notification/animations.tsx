import { Variants, Transition } from "framer-motion";

export const variants: Variants = {
  hidden: {
    y: 300,
    opacity: 0
  },
  active: {
    y: 0,
    opacity: 1
  }
};

export const transition: Transition = {
  damping: 20,
  stiffness: 180,
  type: "spring"
};
