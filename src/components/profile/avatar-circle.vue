<template>
  <v-card class="avatar--frame rounded-xl" :width="width" :height="height">
    <img :src="src" :alt="alt" class="avatar" />
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Avatar_circle extends Vue {
  @Prop({ default: "" }) src;
  @Prop({ default: "" }) alt;
  @Prop({ default: "36" }) width;
  @Prop({ default: "36" }) height;
}
</script>

<style scoped>
.avatar--frame {
  position: relative;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;

  position: absolute;
  left: 0;
  top: 0;
}
</style>
