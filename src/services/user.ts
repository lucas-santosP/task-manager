import { API } from "./api";
import { IUser, ILoginPayload, IAuthPayload, IRegisterPayload, IDeleteUserPayload } from "../types";

interface ILoginResponse {
  user: IUser;
  token: string;
}

type IRegisterResponse = ILoginResponse;

interface IAuthResponse {
  user: IUser;
}

interface IDeleteUserResponse {
  user: {
    n: number;
    ok: number;
    deletedCount: number;
  };
}

export const UserServices = {
  login(payload: ILoginPayload) {
    return API.post<ILoginResponse>("/user/login", payload);
  },

  register(payload: IRegisterPayload) {
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
