<template>
  <form>
    <div class="form-group row pa-0">
      <label
        for="username"
        class="col-2 col-sm-4 col-form-label mt-4 text-right"
      >
        <v-avatar height="35px" width="35px">
          <img
            alt="Logo"
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
            width="100"
          />
        </v-avatar>
      </label>
      <div class="col-5 col-sm-8">
        <v-file-input
          height="30px"
          accept="image/"
          label="File input"
          shaped
          hide-details
          prepend-icon
        >
          <template v-slot:label>
            <div class="font-weight-thin">Chọn avatar</div>
          </template>
        </v-file-input>
      </div>
    </div>
    <div class="form-group row">
      <label
        for="username"
        class="col-12 col-sm-4 py-0 col-form-label text-left text-sm-right"
        >Tên
      </label>
      <div class="col-12 col-sm-8 pt-1">
        <v-text-field
          id="username"
          v-model="user.username"
          placeholder="Username"
          disabled
          dense
          solo
        />
      </div>
    </div>
    <div class="form-group row">
      <label
        for="name"
        class="col-12 col-sm-4 py-0 col-form-label text-left text-sm-right"
        >Tên người dùng
      </label>
      <div class="col-12 col-sm-8 pt-1">
        <input
          id="name"
          v-model="user.attributes.name"
          placeholder="First Name"
          class="form-control here"
          type="text"
        />
      </div>
    </div>
    <div class="form-group row">
      <label
        for="email"
        class="col-12 col-sm-4 py-0 col-form-label text-left text-sm-right"
        >Email</label
      >
      <div class="col-12 col-sm-8 pt-1">
        <input
          id="email"
          v-model="user.attributes.email"
          placeholder="Email"
          class="form-control here"
          required="required"
          type="text"
        />
      </div>
    </div>
    <div class="form-group row">
      <label
        for="lastname"
        class="col-12 col-sm-4 py-0 col-form-label text-left text-sm-right"
        >Số điện thoại
      </label>
      <div class="col-12 col-sm-8 pt-1">
        <input
          id="lastname"
          v-model="user.attributes.phone_number"
          placeholder="999-999-999"
          class="form-control here"
          type="text"
        />
      </div>
    </div>

    <div class="form-group row">
      <label
        for="lastname"
        class="col-12 col-sm-4 py-0 col-form-label text-left text-sm-right"
        >Giới tính
      </label>
      <div class="col-12 col-sm-8 pt-1">
        <input
          id="lastname"
          v-model="user.attributes.gender"
          placeholder="999-999-999"
          class="form-control here"
          type="button"
          @click="genderDialog = true"
        />
      </div>
      <v-dialog v-model="genderDialog" width="500">
        <v-card>
          <v-card-title>Tonight's availability</v-card-title>
          <v-card-text>
            <v-radio-group v-model="user.attributes.gender">
              <v-radio
                v-for="n in listGender"
                :key="n"
                :label="n"
                :value="n"
              ></v-radio>
              <v-text-field
                v-model="genderCustom"
                v-if="user.attributes.gender == listGender[2]"
                dense
              ></v-text-field>
            </v-radio-group>
            <v-btn color="primary" @click="genderDialog = false"> Xong </v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
    <div class="form-group row">
      <label
        for="website"
        class="col-12 col-sm-4 py-0 col-form-label text-left text-sm-right"
        >Website</label
      >
      <div class="col-12 col-sm-8 pt-1">
        <input
          id="website"
          v-model="user.attributes.website"
          placeholder="website"
          class="form-control here"
          type="text"
        />
      </div>
    </div>
    <div class="form-group row">
      <label
        for="publicinfo"
        class="col-12 col-sm-4 py-0 col-form-label text-left text-sm-right"
        >Tiểu sử</label
      >
      <div class="col-12 col-sm-8 pt-1">
        <textarea
          id="publicinfo"
          v-model="user.attributes.profile"
          cols="40"
          rows="4"
          class="form-control"
        ></textarea>
      </div>
    </div>
    <div class="form-group row justify-content-sm-center pl-3 p-sm-0">
      <v-btn color="primary" width="auto" @click="updateProfile()"> Gửi </v-btn>
    </div>
  </form>
</template>

<script lang="ts">
import Auth from "@aws-amplify/auth";
import { Component, Provide, Vue } from "vue-property-decorator";
import { ProfileHelper } from "./../../helpers/profile.helper";
import { user } from "./../../viewmodels/profile/userModel";

@Component
export default class extends Vue {
  @Provide() vm = new ProfileHelper();
  user: user = null;
  genderDialog = false;

  listGender = ["Nữ", "Nam", "Tùy chỉnh", "Ẩn"];
  genderCustom = "";

  mounted() {
    this.vm.userInfor.then((info) => {
      this.user = info;
      console.log(info);
    });
  }

  async updateProfile() {
    const user = await Auth.currentAuthenticatedUser();

    console.log(this.user);
    // await Auth.updateUserAttributes(user, {
    //   ...this.user.attributes,
    // })
    //   .then((result) => {
    //     alert("Success");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
}
</script>

<style scoped>
.col-form-label {
  font-weight: 500;

  margin-top: 10px;
}
</style>
