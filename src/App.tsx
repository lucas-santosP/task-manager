import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles/themes";
import GlobalStyles from "./styles/global";
import Header from "./components/Header";

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
