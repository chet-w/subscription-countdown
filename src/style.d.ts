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
      info: string;
      warning: string;
      yellow: string;
      danger: string;
    };
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
  }
}