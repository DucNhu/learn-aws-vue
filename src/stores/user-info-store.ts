import { user } from "@/models/userModel";
import { storageService } from "@/services/storage-service";
import { Auth } from "aws-amplify";
import { action, observable } from "mobx";
export class UserInforStore {
  @observable userInfo: user;
  @observable avatar = "";

  @action async getUser() {
    await Auth.currentUserInfo().then((info) => {
      this.userInfo = info;
    });
    if (this.userInfo.attributes.picture)
      await storageService
        .getFile(this.userInfo.attributes.picture, {
          level: "public",
        })
        .then((result) => {
          this.avatar = result;
        });
  }
}

export const userInforStore = new UserInforStore();
