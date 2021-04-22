import React, { createContext, useContext, useEffect } from "react";
import { useLocation } from "wouter";
import { useSharedContext } from "../shared";
import { useUserReducer } from "./userReducer";
import { UserServices } from "../../services/user";
import { usePersistentState } from "../../utils";
import { IUserContext, UserActions, IStorageAuth } from "./types";
import { IAuthPayload, ILoginPayload, IRegisterPayload } from "../../types/user";

const UserContext = createContext({} as IUserContext);

export const UserContextProvider: React.FC = ({ children }) => {
  const [userState, dispatch] = useUserReducer();
  const { setLoading } = useSharedContext();
  const [location, setLocation] = useLocation();
  const [storageAuth, setStorageAuth] = usePersistentState<IStorageAuth>("user_auth", null);

  async function login(userData: ILoginPayload) {
    const response = await UserServices.login(userData);
    const { user, token } = response.data;
    dispatch({ type: UserActions.LOGIN, payload: { user, token } });
    setStorageAuth({ _id: user._id, token });
    setLocation("/home", { replace: true });
  }

  async function register(userData: IRegisterPayload) {
    const response = await UserServices.register(userData);
    const { user, token } = response.data;
    dispatch({ type: UserActions.LOGIN, payload: { user, token } });
    setStorageAuth({ _id: user._id, token });
    setLocation("/home", { replace: true });
  }

  function logout() {
    setLoading(true);
    dispatch({ type: UserActions.LOGOUT });
    setLocation("/login", { replace: true });
    setStorageAuth(null);
    setLoading(false);
  }

  async function auth(userAuth: IAuthPayload) {
    const response = await UserServices.auth(userAuth);
    const { user } = response.data;
    setStorageAuth({ _id: user._id, token: userAuth.token });
    dispatch({ type: UserActions.LOGIN, payload: { user, token: userAuth.token } });
  }

  async function checkUserAuth() {
    if (!storageAuth) {
      setLocation("/login", { replace: true });
      return;
    }

    try {
      setLoading(true);
      const { _id, token } = storageAuth;
      await auth({ userId: _id, token });

      if (location === "/login" || location === "/register") {
        setLocation("/home", { replace: true });
      }
    } catch (error) {
      console.log("Storage user not found");
      setLocation("/login", { replace: true });
    } finally {
      setLoading(false, 800);
    }
  }

  useEffect(() => {
    checkUserAuth();
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
