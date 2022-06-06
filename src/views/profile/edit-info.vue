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
          shaped="single-line"
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
        <input
          id="username"
          v-model="user.username"
          placeholder="Username"
          class="form-control here"
          required="required"
          type="text"
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
          placeholder="Last Name"
          class="form-control here"
          type="text"
        />
      </div>
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
import { Component, Provide, Vue } from "vue-property-decorator";
import { EditInforViewmodel } from "./../../viewmodels/profile/edit-info";
@Component
export default class extends Vue {
  @Provide() vm = new EditInforViewmodel();
  user = {};

  mounted() {
    this.vm.userInfor.then((info) => {
      this.user = info;
      console.log(info);
    });
  }

  updateProfile() {
    console.log(this.user);
  }
}
</script>

<style scoped>
.col-form-label {
  font-weight: 500;

  margin-top: 10px;
}
</style>
