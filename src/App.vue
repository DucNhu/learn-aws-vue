<template>
  <v-app id="app">
    <router-view />
    <global-load />
  </v-app>
</template>
<script lang="ts">
import { Auth } from "aws-amplify";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    "slide-story": () => import("./components/global-load/global-load.vue"),
  },
})
export default class extends Vue {
  load = false;
  mounted() {
    Auth.currentAuthenticatedUser().then((response) => {
      console.log(response);
    });
  }
}
</script>
<style>
@import "./assets/styles/home.css";
@import "./assets/styles/bootstrap.min.css";

/* Vuetify */
.v-input__slot {
  min-height: auto !important;
  height: auto;
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
/* Input */
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

/* End Input */

@media (min-width: 1204px) {
  .container {
    max-width: 900px !important;
  }
}
</style>
