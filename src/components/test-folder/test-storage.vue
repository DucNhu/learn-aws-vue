<template>
  <div>
    <v-file-input
      accept="image/*"
      label="File input"
      @change="(e) => vm.readFile(e)"
    ></v-file-input>
    <v-btn color="blue-grey" class="ma-2 white--text" @click="vm.putFile()">
      Upload
      <v-icon right dark> mdi-cloud-upload </v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { TestStorageViewmodel } from "./test-storage";
@Component
export default class extends Vue {
  @Provide() vm = new TestStorageViewmodel();
}
</script>

<style scoped></style>
