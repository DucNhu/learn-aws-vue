<template>
  <!-- <amplify-authenticator>
    <div>
      My App
      <amplify-sign-out></amplify-sign-out>
    </div>
  </amplify-authenticator> -->
  <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
    <global-load :load="vm.load" />
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
            <v-form ref="loginForm">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="userLogin.username"
                    placeholder=" "
                    persistent-placeholder
                    label="User Name"
                    maxlength="20"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="userLogin.password"
                    placeholder=" "
                    persistent-placeholder
                    :type="openPass ? 'text' : 'password'"
                    :append-icon="openPass ? 'mdi-eye' : 'mdi-eye-off'"
                    label="Password"
                    @click:append="openPass = !openPass"
                  ></v-text-field>
                </v-col>
                <v-col class="d-flex" cols="12" sm="6" xsm="12"> </v-col>
                <v-spacer></v-spacer>
                <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                  <v-btn
                    x-large
                    block
                    color="success"
                    :disabled="
                      userLogin.username.trim() == '' ||
                      userLogin.password == ''
                    "
                    @click="vm.signIn(userLogin)"
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
              v-if="!vm.confirm_account"
            >
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="userRegister.username"
                    placeholder=" "
                    persistent-placeholder
                    :rules="[rulesHelper.min(userRegister.username, 6)]"
                    label="User Name"
                    maxlength="30"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="userRegister.email"
                    placeholder="abc@gmail.com"
                    persistent-placeholder
                    :rules="[rulesHelper.required, rulesHelper.email]"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="userRegister.password"
                    :append-icon="openPass ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rulesHelper.min(userRegister.password, 6)]"
                    :type="openPass ? 'text' : 'password'"
                    placeholder=" "
                    persistent-placeholder
                    label="Password"
                    @click:append="openPass = !openPass"
                  ></v-text-field>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                  <v-btn
                    x-large
                    block
                    :disabled="disableButton"
                    color="success"
                    @click="vm.signUp(userRegister)"
                    >Register</v-btn
                  >
                </v-col>
              </v-row>
            </v-form>
            <v-form v-else>
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
                  @click="vm.confirmAccount(user, confirm_code)"
                >
                  Register
                </v-btn>
              </v-col>
            </v-form>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";
import { AuthenticationViewModel } from "../viewmodels/authentication-viewmodel";
import { rulesHelper } from "@/helpers/validator-form";

@Component
export default class Authentication extends Vue {
  vm = new AuthenticationViewModel();
  rulesHelper = rulesHelper;
  disableButton = true;

  @Ref("loginForm") loginForm;
  @Ref("registerForm") registerForm;

  userLogin = {
    username: "",
    password: "",
    email: "",
  };
  userRegister = {
    username: "",
    password: "",
    email: "",
  };
  confirm_code = "";
  dialog = true;
  tab = 0;
  tabs = [
    { name: "Login", icon: "mdi-account" },
    { name: "Register", icon: "mdi-account-outline" },
  ];
  valid = true;

  loginPassword = "";
  loginEmail = "";

  openPass = false;

  updated() {
    if (
      Object.values(this.userRegister).every(({ length }) => {
        return length;
      })
    )
      this.validate();
  }

  validate() {
    if (!this.registerForm.validate()) this.disableButton = true;
    else this.disableButton = false;
  }

  reset() {
    this.loginForm.reset();
    this.registerForm.reset();
    this.registerForm.resetValidation();
  }
}
</script>

<style scoped></style>
