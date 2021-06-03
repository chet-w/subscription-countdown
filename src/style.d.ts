// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      lightGrey: string;
      grey: string;
      black: string;
      success: string;
      successLight: string;
      info: string;
      infoLight: string;
      warning: string;
      warningLight: string;
      yellow: string;
      danger: string;
      dangerLight: string;
    };
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
  }
}