import React from "react";
import GlobalStyles from "./styles/global";
import Routes from "./Routes";
import { CustomThemeProvider } from "./contexts/theme";
import { SharedContextProvider } from "./contexts/shared";
import { UserContextProvider } from "./contexts/user";

const App: React.FC = () => {
  return (
    <SharedContextProvider>
      <UserContextProvider>
        <CustomThemeProvider>
          <GlobalStyles />
          <Routes />
        </CustomThemeProvider>
      </UserContextProvider>
    </SharedContextProvider>
  );
};

export default App;
