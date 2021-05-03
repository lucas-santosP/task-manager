import Cookies from "js-cookie";
const COOKIE_KEY = "user_auth";

export type IStorageAuth = { _id: string; token: string };

class UserAuthCookie {
  set(payload: IStorageAuth) {
    Cookies.set(COOKIE_KEY, JSON.stringify({ _id: payload._id, token: payload.token }));
  }

  get() {
    const cookieAuth = Cookies.get(COOKIE_KEY);
    return cookieAuth ? (JSON.parse(cookieAuth) as IStorageAuth) : null;
  }

  remove() {
    Cookies.remove(COOKIE_KEY);
  }
}

export const userAuthCookie = new UserAuthCookie();
