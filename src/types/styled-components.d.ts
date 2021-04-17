import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      textHighlight: string;
      blue: string;
      green: string;
      purple: string;
      gray: string;
      yellow: string;
      red: string;
      lightGray: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontFamily: {
      primary: string;
      secondary: string;
      mono: string;
    };
  }
}
