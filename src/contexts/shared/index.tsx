import React, { createContext, useContext, useState } from "react";
import { ISharedContext } from "./types";

const SharedContext = createContext({} as ISharedContext);

export const SharedContextProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  function setLoading(value: boolean, minimumWait = 500) {
    if (value) setIsLoading(value);
    else setTimeout(() => setIsLoading(value), minimumWait);
  }

  return (
    <SharedContext.Provider value={{ isLoading, setLoading }}>{children}</SharedContext.Provider>
  );
};

export function useSharedContext(): ISharedContext {
  const context = useContext(SharedContext);
  return { ...context };
}
