import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#0C9869",
    secondary: "#AECAC2",
    white: "#F9F8FD",
    lightGrey: "#DEDEDE",
    grey: "#3C4046",
    black: "#111111",
    yellow: "#ffc041",
    success: {
      base: "#0C9869",
      light: "#d1eee4"
    },
    info: {
      base: "#1890FF",
      light: "#b4dbff"
    },
    warning: {
      base: "#F9AD15",
      light: "#fdf3dd"
    },
    danger: {
      base: "#D9363E",
      light: "#ffe8e9"
    }
  },
  breakpoints: {
    xs: 425,
    sm: 768,
    md: 992,
    lg: 1200
  },
  styles: {
    focus: "0 0 0 0.25rem rgb(12 152 105 / 25%)",
    shadow: {
      one: "0 0 25px 10px rgba(0, 0, 0, 0.05)"
    }
  }
};
