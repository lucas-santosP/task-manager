import React from "react";
import { CustomThemeProvider } from "./contexts/theme";
import GlobalStyles from "./styles/global";
import Routes from "./Routes";
import { StoreProvider } from "./store";

const App: React.FC = () => {
  return (
    <StoreProvider>
      <CustomThemeProvider>
        <GlobalStyles />
        <Routes />
      </CustomThemeProvider>
    </StoreProvider>
  );
};

export default App;
