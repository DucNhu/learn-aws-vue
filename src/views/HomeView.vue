<template>
  <div class="home">
    <!-- Page Loader -->
    <!-- <div id="loader-wrapper">
      <div id="loader"></div>

      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
    </div> -->
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <router-link to="/photos" class="navbar-brand" custom>
          <img src="../assets/images/logo.png" alt="logo" width="100" />
          Origin
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                to="/photos"
                class="nav-link nav-link-1"
                active-class="active"
                custom
              >
                Photos
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/test"
                class="nav-link nav-link-2"
                active-class="active"
                custom
              >
                Test
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/about"
                class="nav-link nav-link-3"
                active-class="active"
                custom
              >
                About
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-4">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div
      class="tm-hero d-flex justify-content-center align-items-center bg-navigation"
    >
      <form class="d-flex tm-search-form">
        <input
          class="form-control tm-search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <i class="fas fa-bars"></i>
        <button
          class="btn btn-outline-success tm-search-btn rounded-0"
          type="submit"
        >
          <v-icon class="white--text">mdi-magnify</v-icon>
        </button>
      </form>
    </div>

    <router-view />

    <footer class="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
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
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
<style>
.bg-navigation {
  background: center/cover url("../assets/images/navigation-bg.jpg");
}
</style>
