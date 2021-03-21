import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header />
    </ThemeProvider>
  );
};

export default App;
