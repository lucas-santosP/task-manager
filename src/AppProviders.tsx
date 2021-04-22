import React from "react";
import { CustomThemeProvider } from "./contexts/theme";
import { SharedContextProvider } from "./contexts/shared";
import { UserContextProvider } from "./contexts/user";
import { TemplateContextProvider } from "./contexts/templates";
import { TaskContextProvider } from "./contexts/tasks";

const AppProviders: React.FC = ({ children }) => {
  return (
    <SharedContextProvider>
      <UserContextProvider>
        <TemplateContextProvider>
          <TaskContextProvider>
            <CustomThemeProvider>{children}</CustomThemeProvider>
          </TaskContextProvider>
        </TemplateContextProvider>
      </UserContextProvider>
    </SharedContextProvider>
  );
};

export default AppProviders;
