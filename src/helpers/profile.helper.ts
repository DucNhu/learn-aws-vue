import { Auth } from "aws-amplify";
import { computed } from "mobx";

export class ProfileHelper {
  constructor() {
    //
  }

  get userInfor() {
    const user = Auth.currentUserInfo().then((info) => {
      return info;
    });

    return user;
  }
}
