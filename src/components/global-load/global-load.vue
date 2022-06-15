<template>
  <v-overlay :value="vm.load" z-index="6">
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </v-overlay>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { globalLoad } from "./global-load-viewmodel";
@Component
export default class extends Vue {
  vm = globalLoad;
}
</script>

<style scoped></style>
