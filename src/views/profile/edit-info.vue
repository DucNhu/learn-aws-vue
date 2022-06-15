<template>
  <v-form ref="form">
    <template v-if="user !== null">
      <div class="form-group row pa-0">
        <div class="col-2 col-sm-4 text-right">
          <label for="avatar" class="col-form-label mt-2">
            <avatar-circle :src="avatar" :alt="avatar" />
          </label>
        </div>

        <div class="col-5 col-sm-8">
          <v-file-input
            id="avatar"
            chips
            height="30px"
            accept="image/png, image/jpeg, image/bmp"
            label="File input"
            hide-details
            prepend-icon
            v-model="newAvatar"
            @change="changeAvatar()"
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
            disabled
            hide-details="true"
            outlined
            id="username"
            v-model.trim="user.username"
            :rules="requied"
            placeholder="Username"
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
          <v-text-field
            hide-details="true"
            outlined
            id="name"
            v-model.trim="user.attributes.name"
            placeholder="First Name"
            :rules="required"
            counter="30"
            maxlength="30"
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
          <v-text-field
            hide-details="true"
            outlined
            id="email"
            v-model.trim="user.attributes.email"
            placeholder="Email"
            :rules="email"
          ></v-text-field>
        </div>
      </div>
      <div class="form-group row">
        <label
          for="phone"
          class="col-12 col-sm-4 py-0 col-form-label text-left text-sm-right"
          >Số điện thoại
        </label>
        <div class="col-12 col-sm-8 pt-1">
          <v-text-field
            outlined
            hide-details="true"
            id="phone"
            v-model.trim="user.attributes.phone_number"
            placeholder="999-999-999"
          />
        </div>
      </div>

      <div class="form-group row">
        <label
          for="gender"
          class="col-12 col-sm-4 py-0 col-form-label text-left text-sm-right"
          >Giới tính
        </label>
        <div class="col-12 col-sm-8 pt-1">
          <input
            id="gender"
            v-model.trim="user.attributes.gender"
            placeholder="999-999-999"
            class="form-control text-left text-dark"
            type="button"
            @click="genderDialog = true"
          />
        </div>
        <v-dialog v-model.trim="genderDialog" width="500">
          <v-card>
            <v-card-title>Chọn giới tính</v-card-title>
            <v-card-text>
              <v-radio-group v-model.trim="user.attributes.gender">
                <v-radio
                  v-for="n in listGender"
                  :key="n.key"
                  :label="n.key"
                  :value="n.value"
                ></v-radio>
                <v-text-field
                  :rules="requied"
                  counter="10"
                  maxlength="10"
                  v-model.trim="genderCustom"
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
          <v-text-field
            outlined
            hide-details="true"
            id="website"
            v-model.trim="user.attributes.website"
            placeholder="website"
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
          <v-textarea
            outlined
            hide-details="true"
            name="input-7-1"
            rows="4"
            row-height="15"
            v-model="user.attributes.profile"
          ></v-textarea>
        </div>
      </div>
      <div class="form-group row justify-content-sm-center pl-3 p-sm-0">
        <v-btn
          color="primary"
          width="auto"
          @click="updateProfile()"
          :disabled="!isValidate"
          :btnloading="btnloading"
        >
          Gửi
        </v-btn>
      </div>
    </template>
  </v-form>
</template>

<script lang="ts">
import Auth from "@aws-amplify/auth";
import { Component, Provide, Ref, Vue } from "vue-property-decorator";
import { ProfileHelper } from "./../../helpers/profile.helper";
import { listGender, user } from "../../models/userModel";
import { storageService } from "@/services/storage-service";
import { globalLoad } from "@/components/global-load/global-load-viewmodel";

@Component({
  components: {
    "avatar-circle": () => import("@/components/profile/avatar-circle.vue"),
  },
})
export default class extends Vue {
  @Provide() vm = new ProfileHelper();

  @Ref("form") form;

  user: user = null;
  avatar = "";
  genderDialog = false;

  listGender = listGender;
  genderCustom = "";
  requied = [(v: any) => !!v || "Required"];
  formInfo = true;
  email = [
    (v) => !!v || "E-mail is required",
    (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];
  required = [(v) => !!v || "Name is required"];
  newAvatar = null;

  isValidate = false;
  isUpdateAvatar = false;
  btnloading = false;
  created() {
    this.initForm();
  }

  updated() {
    if (this.form.validate()) this.isValidate = true;
    else this.isValidate = false;
  }

  async initForm() {
    await Auth.currentUserInfo().then((info) => {
      this.user = info;
      console.log(info);

      storageService
        .getFile(this.user.attributes.picture, {
          level: "public",
          // expires: 604_800,
        })
        .then((result) => {
          this.avatar = result;
          console.log(this.avatar);
        });

      switch (info.attributes.gender) {
        case this.listGender[0].key:
          break;
        case this.listGender[1].key:
          break;
        case this.listGender[3].key:
          break;
        default:
          this.genderCustom = info.attributes.gender;
          this.listGender[2].value = info.attributes.gender;
          break;
      }
    });
  }

  async updateProfile() {
    globalLoad.onLoad();

    // const defaultInfo = Object.assign(this.user);
    // console.log("defaultInfo: ", defaultInfo);
    // console.log("user: ", this.user);

    // console.log(
    //   Object.keys(this.user).some(
    //     (field) => this.user[field] !== defaultInfo[field]
    //   )
    // );

    if (this.form.validate()) {
      const user = await Auth.currentAuthenticatedUser();
      if (!this.user.attributes.phone_number.includes("+84")) {
        this.user.attributes.phone_number =
          "+84" + this.user.attributes.phone_number;
      }
      const profileNew = {
        ...this.user.attributes,

        gender: this.user.attributes.gender,
        phone_number: this.user.attributes.phone_number ?? "",
        picture: this.user.attributes.picture,
        website: this.user.attributes.website ?? "",
        profile: this.user.attributes.profile ?? "",
      };
      console.log(profileNew);

      await Auth.updateUserAttributes(user, {
        ...profileNew,
      })
        .then(() => {
          // globalLoad.offLoad();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          globalLoad.offLoad();
          this.btnloading = false;
        });
      if (this.isUpdateAvatar) {
        await storageService
          .putFile(this.user.attributes.picture, this.newAvatar)
          .then((result) => {
            this.isUpdateAvatar = false;
            console.log("Success avatar", result);
          })
          .finally(() => {
            globalLoad.offLoad();
            this.btnloading = false;
          });
      }
    }
  }

  changeAvatar() {
    this.isUpdateAvatar = true;
    this.avatar = URL.createObjectURL(this.newAvatar);
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const date = new Date().getDate();
    this.user.attributes.picture = `avatars/${year}/${month}/${date}/${this.newAvatar.name}`;
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
        this.user.attributes.gender = this.genderCustom;
        this.listGender[2].value = this.genderCustom;
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
