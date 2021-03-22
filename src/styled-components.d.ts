import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    toggleTheme?: () => void;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      textHighlight: string;
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
  }
}
