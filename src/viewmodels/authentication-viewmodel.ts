import router from "@/router";
import { dataStoreService } from "@/services/datastore-service";
import Auth from "@aws-amplify/auth";
import { createUserModel } from "@/grapqls/creates/CreateUser";

import axios from "axios";

export class AuthenticationViewModel {
  newUser;
  confirm_account;
  constructor() {
    //
  }

  async signUp(user) {
    try {
      await Auth.signUp({
        ...user,
      }).then((newUser) => {
        this.newUser = newUser;
        this.confirm_account = true;
      });
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  async confirmAccount(user, confirm_code) {
    try {
      await Auth.confirmSignUp(user.attributes.email, confirm_code).then(() => {
        this.signIn(user);
      });
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  async signIn(user) {
    try {
      const userCurrent: any = await Auth.signIn(user.username, user.password);

      if (userCurrent.signInUserSession.accessToken) {
        router.push("/photos");
      }
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  async deleteUser() {
    try {
      const result = await Auth.deleteUser();
      console.log(result);
    } catch (error) {
      console.log("Error deleting user", error);
    }
  }
}
