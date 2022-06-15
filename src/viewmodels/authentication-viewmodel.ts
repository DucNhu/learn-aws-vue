import { listGender } from "@/models/userModel";
import router from "@/router";
import Auth from "@aws-amplify/auth";
import { globalLoad } from "@/components/global-load/global-load-viewmodel";
import { globalAlert } from "@/components/global-alert/global-alert-viewmodel";

export class AuthenticationViewModel {
  confirm_account = false;
  load = false;

  async signUp(value) {
    try {
      const user = {
        ...value,
        attributes: {
          ...value.attributes,
          name: value.username,
          gender: listGender[3].value,
          email: value.email,
          picture: "default.jpg",
        },
      };
      globalLoad.onLoad();
      await Auth.signUp({
        ...user,
      }).then(() => {
        globalLoad.offLoad();

        this.confirm_account = true;
      });
    } catch (error) {
      globalLoad.offLoad();
      globalAlert.onAlert(error.message);
    }
  }

  async confirmAccount(user, confirm_code) {
    try {
      globalLoad.onLoad();
      await Auth.confirmSignUp(user.username, confirm_code).then(() => {
        this.signIn(user);
      });
    } catch (error) {
      globalLoad.offLoad();
      globalAlert.onAlert(error.message);
    }
  }

  async signIn(user) {
    try {
      globalLoad.onLoad();
      const userCurrent = await Auth.signIn(
        user.username.trim(),
        user.password
      );
      if (userCurrent.signInUserSession.accessToken) {
        router.push("/photos");
      }
    } catch (error) {
      globalLoad.offLoad();
      globalAlert.onAlert(error.message);
    }
  }
}
