import { API } from "./api";
import { IUser, ILoginPayload, IAuthPayload, ISignupPayload, IDeleteUserPayload } from "../types";

interface ILoginResponse {
  user: IUser;
  token: string;
}

interface IRegisterResponse {
  user: IUser;
}

interface IDeleteUserResponse {
  //change on backend "user" to "result"
  user: {
    n: number;
    ok: number;
    deletedCount: number;
  };
}

type IAuthResponse = IRegisterResponse;

export const UserServices = {
  login(payload: ILoginPayload) {
    return API.post<ILoginResponse>("/user/login", payload);
  },

  register(payload: ISignupPayload) {
    return API.post<IRegisterResponse>("/user/register", payload);
  },

  auth(payload: IAuthPayload) {
    return API.get<IAuthResponse>(`/user/${payload.userId}`, {
      headers: { Authorization: `Bearer ${payload.token}` },
    });
  },

  delete(payload: IDeleteUserPayload) {
    return API.delete<IDeleteUserResponse>(`/user/login/${payload.userId}`);
  },
};
