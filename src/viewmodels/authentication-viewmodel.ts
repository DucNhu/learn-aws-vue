import { listGender } from "@/models/userModel";
import router from "@/router";
import Auth from "@aws-amplify/auth";
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
      this.load = true;
      console.log(user);

      await Auth.signUp({
        ...user,
      }).then(() => {
        this.load = false;

        this.confirm_account = true;
      });
    } catch (error) {
      console.log("error signing up:", error);
      this.load = false;
      console.log("end sigup");
    }
  }

  async confirmAccount(user, confirm_code) {
    try {
      this.load = true;
      await Auth.confirmSignUp(user.username, confirm_code).then(() => {
        this.signIn(user);
      });
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  async signIn(user) {
    try {
      this.load = true;
      const userCurrent = await Auth.signIn(
        user.username.trim(),
        user.password
      );
      if (userCurrent.signInUserSession.accessToken) {
        router.push("/photos");
      }
    } catch (error) {
      this.load = false;
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
