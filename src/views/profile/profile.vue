<template>
  <v-row justify="center">
    <v-col cols="4">
      <v-avatar width="100%" class="col-12 col-sm-8" height="auto">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Avatar" />
      </v-avatar>
    </v-col>
    <v-col cols="8" class="d-flex align-center">
      <div class="d-flex flex-wrap pt-3">
        <div class="text-h5 font-weight-thin">Ducnhunee__</div>
        <div class="order-3 order-sm-0">
          <router-link
            to="/account"
            class="mx-0 mx-sm-3 col-12 col-sm-auto btn-edit-profile rounded"
          >
            Chỉnh sửa trang cá nhân
          </router-link>
        </div>
        <div>
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
.btn-edit-profile {
  border: 1px solid #cfd8dc;
  padding-block: 5px;
  color: #000 !important;
  font-weight: 500;
}
</style>
