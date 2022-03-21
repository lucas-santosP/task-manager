import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import GlobalStyles from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

import AppProviders from "./AppProviders";
import StoreProvider from "./store/StoreProvider";
import { ToastContainer, Flip } from "react-toastify";

import { polyfill } from "mobile-drag-drop";
import { scrollBehaviourDragImageTranslateOverride } from "mobile-drag-drop/scroll-behaviour";

polyfill({ dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride });

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <GlobalStyles />
      <StoreProvider>
        <App />

        <ToastContainer
          draggable={false}
          autoClose={3000}
          limit={3}
          position="bottom-center"
          transition={Flip}
        />
      </StoreProvider>
    </AppProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
