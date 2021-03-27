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

export interface ISignupPayload {
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
