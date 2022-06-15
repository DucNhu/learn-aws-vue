import { user } from "@/models/userModel";
import { storageService } from "@/services/storage-service";
import { Auth } from "aws-amplify";
export class UserInforStore {
  userInfo: user;
  avatar = "";
  constructor() {
    this.getUser();
  }

  getUser() {
    Auth.currentUserInfo()
      .then((info) => {
        this.userInfo = info;
        if (this.userInfo.attributes.picture)
          storageService
            .getFile(this.userInfo.attributes.picture, {
              level: "public",
            })
            .then((result) => {
              this.avatar = result;
            });
      })
      .catch(() => {
        //
      });
    return this.userInfo;
  }
}

export const userInforStore = new UserInforStore();
