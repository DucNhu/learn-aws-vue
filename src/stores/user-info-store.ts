import { user } from "@/models/userModel";
import { Auth } from "aws-amplify";
import { action, observable } from "mobx";
export class UserInforStore {
  @observable userInfo: user;

  constructor() {
    this.getUser();
  }

  @action getUser() {
    Auth.currentUserInfo().then((info) => {
      this.userInfo = info;
    });
  }
}

export const userInfo = new UserInforStore();
