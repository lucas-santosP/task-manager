import React from "react";
import { usePersistentState } from "./utils";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { light, dark } from "./styles/themes";
import GlobalStyles from "./styles/global";
import Routes from "./Routes";

const App: React.FC = () => {
  const [theme, setTheme] = usePersistentState<DefaultTheme>("theme", light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={{ ...theme, toggleTheme }}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
