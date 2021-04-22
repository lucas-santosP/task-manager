import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppProviders from "./AppProviders";
import GlobalStyles from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <GlobalStyles />
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
