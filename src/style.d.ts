// import original module declarations
import "styled-components";

export interface ColorSet {
  base: string;
  light: string;
  dark?: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      lightGrey: string;
      grey: string;
      black: string;
      success: ColorSet;
      info: ColorSet;
      warning: ColorSet;
      danger: ColorSet;
      yellow: string;
    };
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
    styles: {
      focus: string;
      shadow: {
        one: string;
      }
    }
  }
}