import React from "react";
import { CustomThemeProvider } from "./contexts/theme";
import { SharedContextProvider } from "./contexts/shared";
import { UserContextProvider } from "./contexts/user";
import { TemplateContextProvider } from "./contexts/templates";

const AppProviders: React.FC = ({ children }) => {
  return (
    <SharedContextProvider>
      <UserContextProvider>
        <TemplateContextProvider>
          <CustomThemeProvider>{children}</CustomThemeProvider>
        </TemplateContextProvider>
      </UserContextProvider>
    </SharedContextProvider>
  );
};

export default AppProviders;
