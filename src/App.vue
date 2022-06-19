<template>
  <v-app id="app">
    <router-view />
    <global-load />
    <global-alert />
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    "global-load": () => import("./components/global-load/global-load.vue"),
    "global-alert": () => import("@/components/global-alert/global-alert.vue"),
  },
})
export default class App extends Vue {}
</script>
<style>
@import "./assets/styles/home.css";
@import "./assets/styles/bootstrap.min.css";

/* Vuetify */
.v-dialog {
  box-shadow: none !important;
}
.v-input__slot {
  min-height: auto !important;
  height: 38.38px;
  display: flex !important;
  align-items: center !important;
}

.v-textarea .v-input__slot {
  min-height: 56px !important;
}

.v-application .error--text {
  color: rgba(0, 0, 0, 0.38) !important;
  caret-color: rgba(0, 0, 0, 0.87) !important;
}

.v-application .error--text fieldset {
  border: 1px solid rgba(0, 0, 0, 0.38) !important;
}
/* End vuetify */

/* Css */
/* Form */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  font-weight: 100;
}

textarea {
  margin: 0px !important;
}

/* End Form */
@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 100%;
  }
}
@media (min-width: 1204px) {
  .container {
    max-width: 900px !important;
  }
}
</style>
