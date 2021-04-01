import { ILoginPayload, IRegisterPayload, IUser } from "../../types/user";

// User reducer
export enum UserActions {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export interface ILoginAction {
  type: UserActions.LOGIN;
  payload: {
    user: IUser;
    token: string;
  };
}

export interface ILogoutAction {
  type: UserActions.LOGOUT;
}

export type UserActionsTypes = ILogoutAction | ILoginAction;

export interface IUserReducerState {
  user: IUser | null;
  token: string | null;
}

// User context
export interface IUserContext extends IUserReducerState {
  login: (userData: ILoginPayload) => Promise<void>;
  register: (userData: IRegisterPayload) => Promise<void>;
  logout: () => void;
}

export type IStorageAuth = { _id: string; token: string } | null;
