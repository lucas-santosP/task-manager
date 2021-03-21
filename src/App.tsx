import React from "react";
import { usePersistentState } from "./hooks";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { light, dark } from "./styles/themes";
import GlobalStyles from "./styles/global";
import Login from "./pages/Login";

const App: React.FC = () => {
  const [theme, setTheme] = usePersistentState<DefaultTheme>("theme", light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={{ ...theme, toggleTheme }}>
      <GlobalStyles />

      <Login />
    </ThemeProvider>
  );
};

export default App;
