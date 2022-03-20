import { makeAutoObservable, runInAction } from "mobx";
import { UserServices } from "../../services/user";
import { IAuthPayload, ILoginPayload, IRegisterPayload, IUser } from "../../types/user";
import { IRootStore, ISetLocation } from "../types";
import { userAuthCookie } from "../../utils/userAuthCookie";

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
    userAuthCookie.set({ _id: user._id, token });
    setLocation("/home", { replace: true });
  }

  async register(userData: IRegisterPayload, setLocation: ISetLocation) {
    const response = await UserServices.register(userData);
    const { user, token } = response.data;
    runInAction(() => {
      this.user = user;
      this.token = token;
    });
    userAuthCookie.set({ _id: user._id, token });
    setLocation("/home", { replace: true });
  }

  logout(setLocation: ISetLocation) {
    this.rootStore.setLoading(true);
    runInAction(() => {
      this.token = null;
      this.user = null;
    });
    userAuthCookie.remove();
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
    userAuthCookie.set({ _id: user._id, token });
  }

  async checkUserAuth() {
    const storageAuth = userAuthCookie.get();
    if (!storageAuth) {
      this.rootStore.setLoading(false);
      return;
    }

    try {
      this.rootStore.setLoading(true);
      const { _id, token } = storageAuth;
      await this.auth({ userId: _id, token });
    } catch (error) {
      console.log("Storage auth not found or invalid");
      userAuthCookie.remove();
    } finally {
      this.rootStore.setLoading(false, 800);
    }
  }
}
