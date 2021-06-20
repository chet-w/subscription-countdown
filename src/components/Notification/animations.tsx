import { Variants, Transition } from "framer-motion";

export const variants: Variants = {
  hidden: {
    x: -300,
    opacity: 0
  },
  active: {
    x: 0,
    opacity: 1
  }
};

export const transition: Transition = {
  damping: 20,
  stiffness: 180,
  type: "spring"
};
