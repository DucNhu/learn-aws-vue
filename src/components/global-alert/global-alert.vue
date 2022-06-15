<template>
  <v-snackbar v-model="alert.snackbar" width="100vw">
    {{ alert.mess }}
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { globalAlert } from "./global-alert-viewmodel";

@Component
export default class GlobalAlert extends Vue {
  alert = globalAlert;
}
</script>

<style scoped></style>
