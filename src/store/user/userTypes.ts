import { IUser } from "../../types";

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

export interface IUserState {
  user: IUser | null;
  token: string | null;
}
