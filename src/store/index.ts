import { configure, makeAutoObservable } from "mobx";
import { UserStore } from "./modules/user";
import { TemplateStore } from "./modules/template";

configure({
  enforceActions: "never",
});

export interface IRootStore {
  isLoading: boolean;
  setLoading: (value: boolean, minimumWait?: number) => void;
}

class Store implements IRootStore {
  isLoading = true;
  userStore;
  templateStore;

  constructor() {
    makeAutoObservable(this);
    this.userStore = new UserStore(this);
    this.templateStore = new TemplateStore(this);
  }

  setLoading(value: boolean, minimumWait = 500) {
    if (value) this.isLoading = value;
    else setTimeout(() => (this.isLoading = value), minimumWait);
  }
}

const store = new Store();
export default store;
