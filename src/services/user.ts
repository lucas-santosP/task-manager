import { API } from "./api";
import { IUser, ILoginPayload, IAuthPayload, ISignupPayload, IDeleteUserPayload } from "../types";
import { AxiosResponse } from "axios";

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
  login(payload: ILoginPayload): Promise<AxiosResponse<ILoginResponse>> {
    return API.post<ILoginResponse>("/user/login", payload);
  },

  register(payload: ISignupPayload): Promise<AxiosResponse<IRegisterResponse>> {
    return API.post("/user/register", payload);
  },

  auth(payload: IAuthPayload): Promise<AxiosResponse<IAuthResponse>> {
    return API.get(`/user/${payload.userId}`, {
      headers: { Authorization: `Bearer ${payload.token}` },
    });
  },

  delete(payload: IDeleteUserPayload): Promise<AxiosResponse<IDeleteUserResponse>> {
    return API.delete(`/user/login/${payload.userId}`);
  },
};
