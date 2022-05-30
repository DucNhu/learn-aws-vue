<template>
  <v-row justify="center">
    <v-col cols="4">
      <v-avatar width="100%" class="col-12 col-sm-8" height="auto">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Avatar" />
      </v-avatar>
    </v-col>
    <v-col cols="8">
      <div class="d-flex align-end flex-wrap">
        <div class="text-h5 font-weight-thin">Ducnhunee__</div>
        <div
          class="mx-0 mx-sm-4 py-2 pa-sm-0 order-3 order-sm-0 col-12 col-sm-auto"
        >
          <v-btn
            class="text-black font-weight-bold caption border-gray"
            outlined
            color="gray"
          >
            Chỉnh sửa trang cá nhân
          </v-btn>
        </div>
        <div class="">
          <v-btn class="text-black-50 text-h6" icon>
            <font-awesome-icon icon="fa-solid fa-gear" />
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {}
</script>

<style scoped>
.border-gray {
  border-color: #cfd8dc;
}
</style>
