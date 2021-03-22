import React, { useMemo } from "react";
import { usePersistentState } from "./utils";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles/themes";
import GlobalStyles from "./styles/global";
import Routes from "./Routes";

const App: React.FC = () => {
  const [storageTheme, setStorageTheme] = usePersistentState("theme", "light");

  function toggleTheme() {
    setStorageTheme(storageTheme === "light" ? "dark" : "light");
  }

  const theme = useMemo(() => {
    return storageTheme === "light" ? light : dark;
  }, [storageTheme]);

  return (
    <ThemeProvider theme={{ ...theme, toggleTheme }}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
