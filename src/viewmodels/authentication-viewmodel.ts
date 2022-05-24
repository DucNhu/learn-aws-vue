// import { UserModel } from "@/aws/models";
// import router from "@/router";
// import { dataStoreService } from "@/services/datastore-service";
// import Auth from "@aws-amplify/auth";
// import { createUserModel } from "@/grapqls/creates/CreateUser";

// import axios from "axios";

// const API =
//   "https://zorq5m0qi3.execute-api.ap-northeast-1.amazonaws.com/user/user";
// export class AuthenticationViewModel {
//   constructor() {
//     //
//   }

//   // async signUp(user) {
//   //   try {
//   //     await Auth.signUp({
//   //       ...user,
//   //     }).then((newUser) => {
//   //       this.newUser = newUser;
//   //       this.confirm_account = true;
//   //     });
//   //   } catch (error) {
//   //     console.log("error signing up:", error);
//   //   }
//   // }

//   // async confirmAccount() {
//   //   try {
//   //     await Auth.confirmSignUp(
//   //       user.attributes.email,
//   //       this.confirm_code
//   //     ).then(() => {
//   //       this.registerUser();
//   //       this.signIn();
//   //     });
//   //   } catch (error) {
//   //     console.log("error signing up:", error);
//   //   }
//   // }

//   async signIn(user) {
//     try {
//       const userCurrent: any = await Auth.signIn(user.username, user.password);

//       axios({
//         method: "GET",
//         url: API + "?id=" + userCurrent.attributes.sub,
//         responseType: "stream",
//       })
//         .then(function (response) {
//           // handle success
//           console.log(response);
//         })
//         .catch(function (error) {
//           // handle error
//           console.log(error);
//         });

//       if (userCurrent.signInUserSession.accessToken) {
//         router.push("/photos");
//       }
//     } catch (error) {
//       console.log("error signing in", error);
//     }
//   }

//   async deleteUser() {
//     try {
//       const result = await Auth.deleteUser();
//       console.log(result);
//     } catch (error) {
//       console.log("Error deleting user", error);
//     }
//   }

//   async registerUser() {
//     await axios
//       .get(API)
//       .then(function (response) {
//         // handle success
//         console.log(response);
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       });
//   }
// }
