import { makeAutoObservable, runInAction } from "mobx";
import Cookies from "js-cookie";
import { UserServices } from "../../services/user";
import { IAuthPayload, ILoginPayload, IRegisterPayload, IUser } from "../../types/user";
import { IRootStore, ISetLocation, IStorageAuth } from "../types";

const AUTH_COOKIE = "user_auth";

export class UserStore {
  user: IUser | null = null;
  token: string | null = null;
  rootStore;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  async login(userData: ILoginPayload, setLocation: ISetLocation) {
    const response = await UserServices.login(userData);
    const { user, token } = response.data;
    runInAction(() => {
      this.user = user;
      this.token = token;
    });
    Cookies.set(AUTH_COOKIE, JSON.stringify({ _id: user._id, token } as IStorageAuth));
    setLocation("/home", { replace: true });
  }

  async register(userData: IRegisterPayload, setLocation: ISetLocation) {
    const response = await UserServices.register(userData);
    const { user, token } = response.data;
    runInAction(() => {
      this.user = user;
      this.token = token;
    });
    Cookies.set(AUTH_COOKIE, JSON.stringify({ _id: user._id, token } as IStorageAuth));
    setLocation("/home", { replace: true });
  }

  logout(setLocation: ISetLocation) {
    this.rootStore.setLoading(true);
    runInAction(() => {
      this.token = null;
      this.user = null;
    });
    Cookies.remove(AUTH_COOKIE);
    setLocation("/login", { replace: true });
    this.rootStore.setLoading(false);
  }

  async auth(userAuth: IAuthPayload) {
    const response = await UserServices.auth(userAuth);
    const { user } = response.data;
    const { token } = userAuth;
    runInAction(() => {
      this.user = user;
      this.token = token;
    });
    Cookies.set(AUTH_COOKIE, JSON.stringify({ _id: user._id, token } as IStorageAuth));
  }

  async checkUserAuth(currentLocation: string, setLocation: ISetLocation) {
    const cookieAuth = Cookies.get(AUTH_COOKIE);
    const storageAuth = cookieAuth ? (JSON.parse(cookieAuth) as IStorageAuth) : null;

    if (!storageAuth) {
      this.rootStore.setLoading(false);
      setLocation("/login", { replace: true });
      return;
    }

    try {
      this.rootStore.setLoading(true);
      const { _id, token } = storageAuth;
      await this.auth({ userId: _id, token });
      if (currentLocation === "/login" || currentLocation === "/register") {
        setLocation("/home", { replace: true });
      }
    } catch (error) {
      console.log("Storage user not found");
      setLocation("/login", { replace: true });
    } finally {
      this.rootStore.setLoading(false, 800);
    }
  }
}
