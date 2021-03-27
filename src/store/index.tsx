import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "wouter";
import { setAuthHeader } from "../services/api";
import { UserServices } from "../services/user";
import { useUserReducer } from "./user/userReducer";
import { IUserState, UserActions } from "./user/userTypes";
import { usePersistentState } from "../utils";
import { ILoginPayload } from "../types";

interface IStoreState extends IUserState {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
  login: (userData: ILoginPayload) => Promise<void>;
  logout: () => void;
}

type IStorageAuth = { _id: string; token: string } | null;

const StoreContext = createContext({} as IStoreState);

export const StoreProvider: React.FC = ({ children }) => {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [userState, dispatch] = useUserReducer();
  const [storageAuth, setStorageAuth] = usePersistentState("user_auth", null as IStorageAuth);

  async function login(userData: ILoginPayload) {
    const response = await UserServices.login(userData);
    const { user, token } = response.data;
    dispatch({ type: UserActions.LOGIN, payload: { user, token } });
    setStorageAuth({ _id: user._id, token });
    setAuthHeader(token);
    setLocation("/home", { replace: true });
  }

  function logout() {
    dispatch({ type: UserActions.LOGOUT });
    setLocation("/login", { replace: true });
    setStorageAuth(null);
  }

  function setLoading(value: boolean) {
    if (value) setIsLoading(value);
    else setTimeout(() => setIsLoading(value), 500); // minimum loading time
  }

  async function checkUserStorageAuth() {
    if (storageAuth) {
      try {
        setLoading(true);
        const { _id, token } = storageAuth;
        const response = await UserServices.auth({ userId: _id, token });
        const { user } = response.data;
        dispatch({ type: UserActions.LOGIN, payload: { user, token } });
        setAuthHeader(token);
        setLocation("/home", { replace: true });
      } catch (error) {
        console.log("Storage user not found");
        setLocation("/login", { replace: true });
      } finally {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    checkUserStorageAuth();
  }, []);

  return (
    <StoreContext.Provider value={{ ...userState, isLoading, setLoading, login, logout }}>
      {children}
    </StoreContext.Provider>
  );
};

export function useStore(): IStoreState {
  const context = useContext(StoreContext);
  return { ...context };
}
