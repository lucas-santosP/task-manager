import React from "react";
import { CustomThemeProvider } from "./contexts/theme";

const AppProviders: React.FC = ({ children }) => {
  return <CustomThemeProvider>{children}</CustomThemeProvider>;
};

export default AppProviders;
