<template>
  <v-card
    class="avatar--frame rounded-circle"
    :width="width"
    :height="height"
    :style="{ 'padding-bottom': pb }"
  >
    <img :src="src" :alt="alt" class="avatar" />
  </v-card>
</template>

<script lang="ts">
import { userInforStore } from "@/stores/user-info-store";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Avatar_circle extends Vue {
  @Prop({ default: "" }) src;
  @Prop({ default: "" }) alt;
  @Prop({ default: "36" }) width;
  @Prop({ default: "36" }) height;
  @Prop({ default: "0" }) pb;

  mounted() {
    this.getInfo();
  }
  async getInfo() {
    if (this.src == "") {
      await userInforStore.getUser();
      this.src = await userInforStore.avatar;
    }
  }
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
