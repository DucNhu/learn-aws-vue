<template>
  <form v-if="user !== null">
    <div class="form-group row pa-0">
      <label
        for="avatar"
        class="col-2 col-sm-4 col-form-label mt-4 text-right cursor-pointer"
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
          id="avatar"
          height="30px"
          accept="image/"
          label="File input"
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
          hide-details="true"
          outlined
          height="auto"
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
          class="form-control"
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
          class="form-control"
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
          class="form-control"
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
          class="form-control text-left"
          type="button"
          @click="genderDialog = true"
        />
      </div>
      <v-dialog v-model="genderDialog" width="500">
        <v-card>
          <v-card-title>Chọn giới tính</v-card-title>
          <v-card-text>
            <v-radio-group v-model="user.attributes.gender">
              <v-radio
                v-for="n in listGender"
                :key="n.key"
                :label="n.key"
                :value="n.value"
              ></v-radio>
              <v-text-field
                :rules="rules"
                counter="10"
                maxlength="10"
                v-model="genderCustom"
                v-if="user.attributes.gender == listGender[2].value"
                dense
              ></v-text-field>
            </v-radio-group>
            <v-btn color="primary" @click="confirmGender()"> Xong </v-btn>
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
          class="form-control"
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
import { user } from "../../models/userModel";

@Component
export default class extends Vue {
  @Provide() vm = new ProfileHelper();
  user: user = null;
  genderDialog = false;

  listGender = [
    {
      key: "Nữ",
      value: "Nữ",
    },
    {
      key: "Nam",
      value: "Nam",
    },
    {
      key: "Tùy chỉnh",
      value: "",
    },
    {
      key: "Ẩn",
      value: "Ẩn",
    },
  ];
  genderCustom = "";
  rules = [(v: any) => !!v || "Required"];
  mounted() {
    this.initForm();
  }
  async initForm() {
    await Auth.currentUserInfo().then((info) => {
      this.user = info;
    });
  }
  async updateProfile() {
    const user = await Auth.currentAuthenticatedUser();

    console.log({
      ...this.user,

      attributes: {
        ...this.user.attributes,

        gender:
          this.genderCustom == ""
            ? this.user.attributes.gender
            : this.genderCustom,
      },
    });
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

  confirmGender() {
    switch (this.user.attributes.gender) {
      case this.listGender[0].key:
        break;
      case this.listGender[1].key:
        break;
      case this.listGender[3].key:
        break;

      default:
        this.user.attributes.gender = this.genderCustom.trim();
        this.listGender[2].value = this.genderCustom.trim();
        break;
    }
    // if (this.genderCustom != "")
    //   this.user.attributes.gender = this.genderCustom;
    // // else this.genderCustom = "";
    // this.listGender[2].value = this.genderCustom;
    // this.genderCustom = "";
    this.genderDialog = false;
  }
}
</script>

<style scoped>
.col-form-label {
  font-weight: 500;

  margin-top: 10px;
}
</style>
