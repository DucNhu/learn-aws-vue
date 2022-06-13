<template>
  <v-slide-group
    multiple
    show-arrows
    justify="center"
    class="pa-2 border rounded-lg"
    next-icon="mdi-chevron-right"
    prev-icon="mdi-chevron-left"
  >
    <v-slide-item v-for="(user, index) in data" :key="index">
      <v-card-actions>
        <button>
          <!-- <v-avatar size="65">
            <img alt="Avatar" :src="user.avatar" />
          </v-avatar> -->
          <avatar-circle
            :src="user.avatar"
            :alt="'avatar'"
            :width="65"
            :height="65"
          />
          <div class="mt-2">
            {{ user.name }}
          </div>
        </button>
      </v-card-actions>
    </v-slide-item>
  </v-slide-group>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({
  components: {
    "avatar-circle": () => import("@/components/profile/avatar-circle.vue"),
  },
})
export default class extends Vue {
  data = [];
  mounted() {
    for (let index = 0; index < 15; index++) {
      this.data.push({
        name: "DucNhu",
        avatar:
          "https://dogsnstuff.net/wp-content/uploads/2021/07/Why-are-dogs-so-cute-758x505.jpg",
      });
    }
  }
}
</script>

<style scoped>
::v-deep .v-slide-group__next {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}
::v-deep .v-slide-group__next i,
::v-deep .v-slide-group__prev i {
  font-size: 36px;
  background: #fff;
  border-radius: 90px;
}
::v-deep .v-slide-group__prev {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

::v-deep .theme--light.v-icon.v-icon.v-icon--disabled {
  display: none;
}
</style>
