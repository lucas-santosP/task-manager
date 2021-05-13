import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppProviders from "./AppProviders";
import GlobalStyles from "./styles/global";
import { polyfill } from "mobile-drag-drop";
import { scrollBehaviourDragImageTranslateOverride } from "mobile-drag-drop/scroll-behaviour";

polyfill({ dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride });

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <GlobalStyles />
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
