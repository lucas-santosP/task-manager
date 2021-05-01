import React from "react";
import { CustomThemeProvider } from "./contexts/theme";
// import {Provider} from "mobx-react"
const AppProviders: React.FC = ({ children }) => {
  return <CustomThemeProvider>{children}</CustomThemeProvider>;
};

export default AppProviders;
