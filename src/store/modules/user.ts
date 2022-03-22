import { makeAutoObservable, runInAction } from "mobx";
import { UserServices } from "../../services/user";
import {
  IAuthPayload,
  ILoginPayload,
  IRegisterPayload,
  IUpdateUserPayload,
  IUser,
} from "../../types/user";
import { IRootStore } from "../types";
import { userAuthCookie } from "../../utils/userAuthCookie";

export class UserStore {
  user: IUser | null = null;
  token: string | null = null;
  rootStore;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  async login(userData: ILoginPayload) {
    const response = await UserServices.login(userData);
    const { user, token } = response.data;
    runInAction(() => {
      this.user = user;
      this.token = token;
    });
    userAuthCookie.set({ _id: user._id, token });
  }

  async register(userData: IRegisterPayload) {
    const response = await UserServices.register(userData);
    const { user, token } = response.data;
    runInAction(() => {
      this.user = user;
      this.token = token;
    });
    userAuthCookie.set({ _id: user._id, token });
  }

  async update(payload: IUpdateUserPayload) {
    const response = await UserServices.update(payload);
    const { user } = response.data;
    runInAction(() => {
      this.user = user;
    });
  }

  logout() {
    this.rootStore.setLoading(true);
    runInAction(() => {
      this.token = null;
      this.user = null;
    });
    userAuthCookie.remove();
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
      this.rootStore.setLoading(false, 1000);
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
