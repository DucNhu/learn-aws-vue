<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<style>
@import "./assets/styles/home.css";
@import "./assets/styles/bootstrap.min.css";

.v-input__slot {
  min-height: auto !important;
}
@media (min-width: 1204px) {
  .container {
    max-width: 900px !important;
  }
}
</style>
