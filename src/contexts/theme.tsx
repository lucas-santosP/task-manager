import React, { createContext, useContext, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components";
import { usePersistentState } from "../utils";
import { light, dark } from "../styles/themes";

interface ICustomThemeContext {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

const CustomThemeContext = createContext({} as ICustomThemeContext);

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [storageTheme, setStorageTheme] = usePersistentState("theme", "light");

  function toggleTheme() {
    setStorageTheme(storageTheme === "light" ? "dark" : "light");
  }

  const theme = useMemo(() => {
    return storageTheme === "light" ? light : dark;
  }, [storageTheme]);

  return (
    <CustomThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={{ ...theme }}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export function useTheme(): ICustomThemeContext {
  const context = useContext(CustomThemeContext);
  return { ...context };
}
