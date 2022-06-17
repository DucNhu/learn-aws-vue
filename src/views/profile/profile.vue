<template>
  <v-row justify-md="center" v-if="userInfor">
    <v-col cols="3" sm="2" md="3">
      <avatar-circle width="100%" pb="100%" height="0" alt="avatar" />
    </v-col>
    <v-col cols="8">
      <div class="d-flex flex-wrap">
        <div
          class="text-h5 font-weight-thin text-truncate col-9 col-sm-auto pa-0"
        >
          {{ userInfor.attributes.name }}
        </div>
        <div
          class="order-3 order-md-0 col-12 col-md-auto pa-0 mt-2 mt-md-0 mx-lg-3"
        >
          <router-link to="/account" class="btn-edit-profile rounded px-3">
            Chỉnh sửa trang cá nhân
          </router-link>
        </div>
        <div class="flex-grow-1 flex-sm-grow-0 ml-1 text-center">
          <v-btn class="text-black-50 text-h6" icon height="100%">
            <font-awesome-icon icon="fa-solid fa-gear" />
          </v-btn>
        </div>
      </div>
      <div class="d-none d-sm-flex">
        <div class="col-4">0 posts</div>
        <div class="col-4">15 followers</div>
        <div class="col-4">17 following</div>
      </div>
    </v-col>
    <div class="attributes--info">
      <v-list disabled class="grey lighten-5">
        <v-list-item-group>
          <v-list-item>
            <v-list-item-content v-text="userInfor.attributes.email">
            </v-list-item-content> </v-list-item
          ><v-list-item v-if="userInfor.attributes.website">
            <v-list-item-content v-text="userInfor.attributes.website">
            </v-list-item-content> </v-list-item
          ><v-list-item v-if="userInfor.attributes.profile">
            <v-list-item-content v-text="userInfor.attributes.profile">
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { userInforStore } from "@/stores/user-info-store";
import { user } from "@/models/userModel";

@Component({
  components: {
    "avatar-circle": () => import("@/components/profile/avatar-circle.vue"),
  },
})
export default class extends Vue {
  userInfor: user = null;
  mounted() {
    this.getUserInfo();
  }

  async getUserInfo() {
    await userInforStore.getUser();
    this.userInfor = userInforStore.userInfo;
  }
}
</script>

<style scoped>
.btn-edit-profile {
  border: 1px solid #cfd8dc;
  padding-block: 5px;
  color: #000 !important;
  font-weight: 500;
}
</style>
