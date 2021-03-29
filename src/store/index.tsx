import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "wouter";
import { setAPIAuthHeader } from "../services/api";
import { UserServices } from "../services/user";
import { useUserReducer } from "./user/userReducer";
import { IUserState, UserActions } from "./user/userTypes";
import { usePersistentState } from "../utils";
import { ILoginPayload, IRegisterPayload } from "../types";

interface IStoreState extends IUserState {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
  login: (userData: ILoginPayload) => Promise<void>;
  register: (userData: IRegisterPayload) => Promise<void>;
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
    setAPIAuthHeader(token);
    setLocation("/home", { replace: true });
  }

  async function register(userData: IRegisterPayload) {
    const response = await UserServices.register(userData);
    const { user, token } = response.data;
    dispatch({ type: UserActions.LOGIN, payload: { user, token } });
    setStorageAuth({ _id: user._id, token });
    setAPIAuthHeader(token);
    setLocation("/home", { replace: true });
  }

  function logout() {
    setLoading(true);
    dispatch({ type: UserActions.LOGOUT });
    setLocation("/login", { replace: true });
    setStorageAuth(null);
    setLoading(false);
  }

  function setLoading(value: boolean, minimumWait = 500) {
    if (value) setIsLoading(value);
    else setTimeout(() => setIsLoading(value), minimumWait);
  }

  async function checkUserStorageAuth() {
    if (storageAuth) {
      try {
        setLoading(true);
        const { _id, token } = storageAuth;
        const response = await UserServices.auth({ userId: _id, token });
        const { user } = response.data;
        dispatch({ type: UserActions.LOGIN, payload: { user, token } });
        setAPIAuthHeader(token);
        setLocation("/home", { replace: true });
      } catch (error) {
        console.log("Storage user not found");
        setLocation("/login", { replace: true });
      } finally {
        setLoading(false, 1000);
      }
    }
  }

  useEffect(() => {
    checkUserStorageAuth();
  }, []);

  return (
    <StoreContext.Provider value={{ ...userState, isLoading, setLoading, login, register, logout }}>
      {children}
    </StoreContext.Provider>
  );
};

export function useStore(): IStoreState {
  const context = useContext(StoreContext);
  return { ...context };
}
