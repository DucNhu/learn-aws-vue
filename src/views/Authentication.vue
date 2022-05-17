<template>
  <!-- <amplify-authenticator>
    <div>
      My App
      <amplify-sign-out></amplify-sign-out>
    </div>
  </amplify-authenticator> -->
  <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
    <div>
      <v-tabs
        v-model="tab"
        show-arrows
        background-color="deep-purple accent-4"
        icons-and-text
        dark
        grow
      >
        <v-tabs-slider color="purple darken-4"></v-tabs-slider>
        <v-tab v-for="(i, index) in tabs" :key="index">
          <v-icon large>{{ i.icon }}</v-icon>
          <div class="caption py-1">{{ i.name }}</div>
        </v-tab>
        <v-tab-item>
          <v-card class="px-4">
            <v-card-text>
              <v-form ref="loginForm" v-model="valid" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="user.username"
                      :rules="emailRules"
                      label="User Name"
                      maxlength="20"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="user.password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Password"
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="6" xsm="12"> </v-col>
                  <v-spacer></v-spacer>
                  <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                    <v-btn
                      x-large
                      block
                      :disabled="!valid"
                      color="success"
                      @click="signIn"
                    >
                      Login
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card class="px-4">
            <v-card-text>
              <v-form
                ref="registerForm"
                v-model="valid"
                lazy-validation
                v-if="!confirm_account"
              >
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="user.username"
                      :rules="emailRules"
                      label="User Name"
                      maxlength="20"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="user.attributes.email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="user.password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Password"
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                    <v-btn
                      x-large
                      block
                      :disabled="!valid"
                      color="success"
                      @click="signUp"
                      >Register</v-btn
                    >
                  </v-col>
                </v-row>
              </v-form>
              <v-from v-else>
                <v-col class="d-flex ml-auto" cols="12">
                  <v-text-field
                    v-model="confirm_code"
                    label="Your verification code is "
                    maxlength="6"
                    required
                  ></v-text-field>
                </v-col>
                <v-col class="d-flex ml-auto" cols="12">
                  <v-btn
                    x-large
                    block
                    :disabled="!valid"
                    color="success"
                    @click="confirmAccount"
                  >
                    Register
                  </v-btn>
                </v-col>
              </v-from>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-dialog>
</template>

<script lang="ts">
import router from "@/router";
import Auth from "@aws-amplify/auth";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Authentication extends Vue {
  confirm_account = false;
  user = {
    username: "",
    password: "",
    attributes: {
      email: "",
    },
  };

  confirm_code = "";

  dialog = true;
  tab = 0;
  tabs = [
    { name: "Login", icon: "mdi-account" },
    { name: "Register", icon: "mdi-account-outline" },
  ];
  valid = true;

  verify = "";
  loginPassword = "";
  loginEmail = "";
  loginEmailRules = [
    (v: any) => !!v || "Required",
    (v: any) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];
  emailRules = [
    (v: any) => !!v || "Required",
    (v: any) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];

  show1 = false;
  rules = {
    required: (value: any) => !!value || "Required.",
    min: (v: any) => (v && v.length >= 6) || "Min 6 characters",
  };
  // Computed
  passwordMatch() {
    return () => this.user.password === this.verify || "Password must match";
  }

  // @Ref("registerForm") $refForm: any;

  // validate() {
  //   if (this.$refForm.validate()) {
  //     // submit form to server/API here...
  //   }
  // }
  // reset() {
  //   this.$refs.form.reset();
  // }
  // resetValidation() {
  //   this.$refs.form.resetValidation();
  // }

  mounted() {
    //
  }

  async signUp() {
    try {
      await Auth.signUp({
        ...this.user,
      });
      this.confirm_account = true;
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  async confirmAccount() {
    try {
      await Auth.confirmSignUp(this.user.attributes.email, this.confirm_code);
      this.signIn();
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  async signIn() {
    try {
      const user = await Auth.signIn(this.user.username, this.user.password);
      Auth.currentUserPoolUser().then((resul) => {
        console.log(resul);
      });

      if (user.signInUserSession.accessToken) {
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
</script>

<style scoped></style>
