import { DefaultTheme } from "styled-components";

export interface ICustomThemeContext {
  theme: DefaultTheme;
  toggleTheme: () => void;
}
