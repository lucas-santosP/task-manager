import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import Header from "./components/Header";

const theme = {
  color: {
    primary: "#rebeccapurple",
  },
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header />
    </ThemeProvider>
  );
};

export default App;
