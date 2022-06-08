import { user } from "@/models/userModel";
import { Auth } from "aws-amplify";
import { action, observable } from "mobx";

export class ProfileHelper {
  @observable profile: user = null;
  constructor() {
    //
  }

  // @action async userInfor() {
  //   await Auth.currentUserInfo().then((info) => {
  //     this.profile = info;
  //   });
  // }
}
