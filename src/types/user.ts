export interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IRegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface IAuthPayload {
  userId: string;
  token: string;
}

export interface IDeleteUserPayload {
  userId: string;
}

export interface IUpdateUserPayload {
  _id: string;
  email: string;
  name: string;
  password: string;
  newPassword?: string;
}
