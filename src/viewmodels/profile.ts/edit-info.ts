import { Auth } from "aws-amplify";
import { computed } from "mobx";

export class EditInforViewmodel {
  constructor() {
    //
  }

  @computed get userInfor() {
    return Auth.currentUserInfo();
  }
}
