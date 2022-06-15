import { action, computed, observable } from "mobx";
export class GlobalLoadViewmodel {
  @observable load = false;

  @action onLoad() {
    this.load = true;
  }
  @action offLoad() {
    this.load = false;
  }
}

export const globalLoad = new GlobalLoadViewmodel();
