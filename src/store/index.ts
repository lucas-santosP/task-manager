import { configure, makeAutoObservable } from "mobx";
import { UserStore } from "./modules/user";
import { TemplateStore } from "./modules/template";
import { IRootStore } from "./types";

configure({
  enforceActions: "never",
});

class Store implements IRootStore {
  isLoading = true;
  userStore;
  templateStore;

  constructor() {
    this.userStore = new UserStore(this);
    this.templateStore = new TemplateStore(this);
    makeAutoObservable(this);
  }

  setLoading(value: boolean, minimumWait = 500) {
    if (value) this.isLoading = value;
    else setTimeout(() => (this.isLoading = value), minimumWait);
  }
}

const store = new Store();
export default store;
