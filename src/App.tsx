import React from "react";
import { CustomThemeProvider } from "./contexts/theme";
import GlobalStyles from "./styles/global";
import Routes from "./Routes";

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
      <Routes />
    </CustomThemeProvider>
  );
};

export default App;
