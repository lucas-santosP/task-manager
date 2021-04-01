import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/global";
import { CustomThemeProvider } from "./contexts/theme";
import { SharedContextProvider } from "./contexts/shared";
import { UserContextProvider } from "./contexts/user";
import { TemplateContextProvider } from "./contexts/templates";

ReactDOM.render(
  <React.StrictMode>
    <SharedContextProvider>
      <UserContextProvider>
        <TemplateContextProvider>
          <CustomThemeProvider>
            <App />
            <GlobalStyles />
          </CustomThemeProvider>
        </TemplateContextProvider>
      </UserContextProvider>
    </SharedContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
