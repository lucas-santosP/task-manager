import React from "react";
import store from "./index";

const StoreContext = React.createContext(store);

const StoreProvider: React.FC = ({ children }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export default StoreProvider;

export const useStore = () => React.useContext(StoreContext);
