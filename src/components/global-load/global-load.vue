<template>
  <v-overlay :value="load" z-index="6">
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </v-overlay>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class extends Vue {
  @Prop({ default: false }) load;
}
</script>

<style scoped></style>
