import { API } from "../api";
import { IUser } from "../../types";
import { AxiosResponse } from "axios";

interface ILoginPayload {
  email: string;
  password: string;
}

interface IRegisterPayload {
  name: string;
  email: string;
  password: string;
}

interface IRegisterPayload {
  name: string;
  email: string;
  password: string;
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

const UserServices = {
  login(payload: ILoginPayload): Promise<AxiosResponse<ILoginResponse>> {
    return API.post<ILoginResponse>("/user/login", payload);
  },

  register(payload: IRegisterPayload): Promise<AxiosResponse<IRegisterResponse>> {
    return API.post<ILoginResponse>("/user/register", payload);
  },

  delete(userId: string): Promise<AxiosResponse<IDeleteResponse>> {
    return API.delete<IDeleteResponse>(`/user/login/${userId}`);
  },
};

export default UserServices;
