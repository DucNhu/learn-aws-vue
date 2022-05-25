<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<style>
@import "./assets/styles/home.css";
@import "./assets/styles/bootstrap.min.css";

@media (min-width: 1904px) {
  .container {
    max-width: 900px !important;
  }
}
</style>
