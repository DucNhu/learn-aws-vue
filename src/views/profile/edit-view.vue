<template>
  <v-sheet class="row pa-2 pb-8">
    <div class="d-none d-sm-block col-4 border-right">
      <v-list nav dense>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in links"
            :key="i"
            :to="'/account/' + item.link"
            active-class="font-weight-bold"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
    <div class="col-sm-8 pa-2">
      <router-view />
    </div>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class EditView extends Vue {
  links = [
    {
      text: "Chỉnh sửa trang cá nhân",
      link: "edit",
    },
    {
      text: "Đổi mật khẩu",
      link: "password/change",
    },
    {
      text: "Trợ giúp",
      link: "help",
    },
    {
      text: "Chỉnh sửa trang cá nhân",
      link: "edit",
    },
  ];
}
</script>

<style scoped>
::v-deep .font-weight-bold .v-list-item__title {
  font-weight: 500 !important;
}
::v-deep .v-list-item__title {
  font-weight: 400 !important;
}
</style>
