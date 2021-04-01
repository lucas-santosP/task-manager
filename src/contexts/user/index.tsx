import React, { createContext, useContext, useEffect } from "react";
import { setAPIAuthHeader } from "../../services/api";
import { useLocation } from "wouter";
import { useSharedContext } from "../shared";
import { useUserReducer } from "./userReducer";
import { UserServices } from "../../services/user";
import { usePersistentState } from "../../utils";
import { IUserContext, UserActions, IStorageAuth } from "./types";
import { ILoginPayload, IRegisterPayload } from "../../types/user";

const UserContext = createContext({} as IUserContext);

export const UserContextProvider: React.FC = ({ children }) => {
  const [, setLocation] = useLocation();
  const { setLoading } = useSharedContext();
  const [userState, dispatch] = useUserReducer();
  const [storageAuth, setStorageAuth] = usePersistentState<IStorageAuth>("user_auth", null);

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

  async function checkUserStorageAuth() {
    if (storageAuth) {
      try {
        setLoading(true);
        const { _id, token } = storageAuth;
        const response = await UserServices.auth({ userId: _id, token });
        const { user } = response.data;
        setAPIAuthHeader(token);
        dispatch({ type: UserActions.LOGIN, payload: { user, token } });
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
    <UserContext.Provider value={{ ...userState, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext(): IUserContext {
  const context = useContext(UserContext);
  return { ...context };
}
