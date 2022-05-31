<template>
  <form>
    <div class="form-group row">
      <label for="username" class="col-4 col-form-label">
        <v-avatar height="30px" width="35px">
          <img
            alt="Logo"
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
            width="100"
          />
        </v-avatar>
      </label>
      <div class="col-8">
        <v-file-input accept="image/*" label="File input"></v-file-input>
      </div>
    </div>
    <div class="form-group row">
      <label for="username" class="col-4 col-form-label">User Name*</label>
      <div class="col-8">
        <input
          id="username"
          name="username"
          placeholder="Username"
          class="form-control here"
          required="required"
          type="text"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="name" class="col-4 col-form-label">First Name</label>
      <div class="col-8">
        <input
          id="name"
          name="name"
          placeholder="First Name"
          class="form-control here"
          type="text"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="lastname" class="col-4 col-form-label">Last Name</label>
      <div class="col-8">
        <input
          id="lastname"
          name="lastname"
          placeholder="Last Name"
          class="form-control here"
          type="text"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="text" class="col-4 col-form-label">Nick Name*</label>
      <div class="col-8">
        <input
          id="text"
          name="text"
          placeholder="Nick Name"
          class="form-control here"
          required="required"
          type="text"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="email" class="col-4 col-form-label">Email*</label>
      <div class="col-8">
        <input
          id="email"
          name="email"
          placeholder="Email"
          class="form-control here"
          required="required"
          type="text"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="website" class="col-4 col-form-label">Website</label>
      <div class="col-8">
        <input
          id="website"
          name="website"
          placeholder="website"
          class="form-control here"
          type="text"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="publicinfo" class="col-4 col-form-label">Public Info</label>
      <div class="col-8">
        <textarea
          id="publicinfo"
          name="publicinfo"
          cols="40"
          rows="4"
          class="form-control"
        ></textarea>
      </div>
    </div>
    <div class="form-group row">
      <label for="newpass" class="col-4 col-form-label">New Password</label>
      <div class="col-8">
        <input
          id="newpass"
          name="newpass"
          placeholder="New Password"
          class="form-control here"
          type="text"
        />
      </div>
    </div>
    <div class="form-group row">
      <div class="offset-4 col-8">
        <button name="submit" type="submit" class="btn btn-primary">
          Update My Profile
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {}
</script>

<style scoped>
.col-form-label {
  font-weight: 500;
  text-align: right;
}
</style>
