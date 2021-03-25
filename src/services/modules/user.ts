import { API } from "../api";
import { IUser } from "../../types";
import { AxiosResponse } from "axios";

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IRegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface IDeletePayload {
  userId: string;
}

interface ILoginResponse {
  user: IUser;
  token: string;
}

interface IRegisterResponse {
  user: IUser;
}

interface IDeleteResponse {
  //change on backend "user" to "result"
  user: {
    n: number;
    ok: number;
    deletedCount: number;
  };
}

export const UserServices = {
  login(payload: ILoginPayload): Promise<AxiosResponse<ILoginResponse>> {
    return API.post<ILoginResponse>("/user/login", payload);
  },

  register(payload: IRegisterPayload): Promise<AxiosResponse<IRegisterResponse>> {
    return API.post<ILoginResponse>("/user/register", payload);
  },

  delete(payload: IDeletePayload): Promise<AxiosResponse<IDeleteResponse>> {
    return API.delete<IDeleteResponse>(`/user/login/${payload.userId}`);
  },
};
