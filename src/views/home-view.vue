<template>
  <v-app>
    <global-load :load="load" />
    <v-app-bar app color="white" flat>
      <router-link
        to="/photos"
        class="navbar-brand"
        custom
        v-if="!$vuetify.breakpoint.smAndDown"
      >
        <img
          src="../assets/images/logo.png"
          alt="logo"
          width="100"
          height="100%"
        />Origin
      </router-link>

      <router-link to="/photos" custom v-if="$vuetify.breakpoint.smAndDown">
        <v-avatar height="30px" width="35px">
          <img alt="Logo" src="../assets/images/logo.png" width="100" />
        </v-avatar>
      </router-link>

      <v-tabs
        centered
        class="col-10 pa-0 mx-auto my-0"
        color="grey darken-1"
        show-arrows
      >
        <v-tab v-for="(item, index) in navigations" :key="index">
          <router-link
            :to="item.link"
            class="nav-link"
            active-class="active"
            custom
          >
            <font-awesome-icon :icon="item.icon" />
          </router-link>
        </v-tab>
        <v-tab>
          <v-dialog width="auto" content-class="col-sm-8 col-md-6">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon>
                <svg
                  aria-label="Bài viết mới"
                  class="_ab6-"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="6.545"
                    x2="17.455"
                    y1="12.001"
                    y2="12.001"
                  ></line>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="12.003"
                    x2="12.003"
                    y1="6.545"
                    y2="17.455"
                  ></line>
                </svg>
              </v-btn>
            </template>
            <BlogForm />
          </v-dialog>
        </v-tab>
      </v-tabs>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar class="col-1 ma-0 pa-0" v-bind="attrs" v-on="on">
            <avatar-circle :src="avatar" :alt="'avatar'" />
          </v-avatar>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in dropdown_list"
            :key="index"
            :to="item.link"
          >
            <v-list-item-title>{{ item.content }}</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="signOut" class="cursor-pointer">
              Log Out
              <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main class="grey lighten-5 pb-5">
      <div class="container pt-4 pt-sm-8">
        <router-view />
      </div>
    </v-main>

    <v-footer class="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
      <div class="container-fluid tm-container-small">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-12 px-5 mb-5">
            <h3 class="tm-text-primary mb-4 tm-footer-title">
              About Catalog-Z
            </h3>
            <p>
              Catalog-Z is free
              <a rel="sponsored" href="https://v5.getbootstrap.com/"
                >Bootstrap 5</a
              >
              Alpha 2 HTML Template for video and photo websites. You can freely
              use this TemplateMo layout for a front-end integration with any
              kind of CMS website.
            </p>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
            <h3 class="tm-text-primary mb-4 tm-footer-title">Our Links</h3>
            <ul class="tm-footer-links pl-0">
              <li><a href="/">Advertise</a></li>
              <li><a href="/">Support</a></li>
              <li><a href="/">Our Company</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
            <ul class="tm-social-links d-flex justify-content-end pl-0 mb-5">
              <li class="mb-2">
                <a href="https://facebook.com"
                  ><i class="fab fa-facebook"></i
                ></a>
              </li>
              <li class="mb-2">
                <a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
              </li>
              <li class="mb-2">
                <a href="https://instagram.com"
                  ><i class="fab fa-instagram"></i
                ></a>
              </li>
              <li class="mb-2">
                <a href="https://pinterest.com"
                  ><i class="fab fa-pinterest"></i
                ></a>
              </li>
            </ul>
            <a href="/" class="tm-text-gray text-right d-block mb-2"
              >Terms of Use</a
            >
            <a href="/" class="tm-text-gray text-right d-block"
              >Privacy Policy</a
            >
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 col-md-7 col-12 px-5 mb-3">
            Copyright 2020 Catalog-Z Company. All rights reserved.
          </div>
          <div class="col-lg-4 col-md-5 col-12 px-5 text-right">
            Designed by
            <a
              href="https://templatemo.com"
              class="tm-text-gray"
              rel="sponsored"
              target="_parent"
              >TemplateMo</a
            >
          </div>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Auth } from "aws-amplify";
import router from "@/router";

import { globalLoad } from "@/components/global-load/global-load-viewmodel";
import { userInforStore } from "@/stores/user-info-store";
import { user } from "@/models/userModel";
@Component({
  components: {
    "avatar-circle": () => import("@/components/profile/avatar-circle.vue"),
    BlogForm: () => import("@/views/blog-form.vue"),
  },
})
export default class HomeView extends Vue {
  load = false;
  username: user;
  avatar = "";
  navigations = [
    {
      icon: "fa-solid fa-house",
      link: "/photos",
    },
    {
      icon: "fa-solid fa-compass",
      link: "/about",
    },
    {
      icon: "fa-solid fa-microscope",
      link: "/test-storage",
    },
    {
      icon: "fa-solid fa-microscope",
      link: "/test",
    },
    {
      icon: "fa-solid fa-microscope",
      link: "/test",
    },
  ];

  dropdown_list = [
    {
      icon: "fa-solid fa-user",
      link: "/profile",
      content: "Profile",
    },
    {
      icon: "fa-solid fa-gear",
      link: "/profile",
      content: "Setting",
    },
  ];

  mounted() {
    globalLoad.offLoad();
    this.getInfo();
  }

  async getInfo() {
    await userInforStore.getUser();

    this.username = userInforStore.userInfo;
    this.avatar = userInforStore.avatar;
    this.dropdown_list[0].link = `/profile/${this.username.username}`;
  }

  async signOut() {
    try {
      this.load = true;

      await Auth.signOut()
        .then(() => {
          router.push("/login");
        })
        .catch((error) => {
          console.log("error signing out: ", error);
        });
      // await DataStore.clear()
      //   .then(() => {
      //     router.push("/login");
      //   })
      //   .catch((error) => {
      //     console.log("error signing out: ", error);
      //   });
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
}
</script>
