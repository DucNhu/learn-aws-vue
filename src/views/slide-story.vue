<template>
  <v-sheet class="mx-auto" max-width="700">
    <v-slide-group multiple show-arrows justify="center">
      <v-slide-item v-for="(user, index) in data" :key="index">
        <v-card-actions>
          <button>
            <v-avatar size="65">
              <img alt="Avatar" :src="user.avatar" />
            </v-avatar>
            <div class="mt-2">
              {{ user.name }}
            </div>
          </button>
        </v-card-actions>
      </v-slide-item>
      <template v-slot:prev>
        <div
          class="position-absolute"
          v-if="showprevButton"
          @click="decreaseSlideCount()"
        >
          <v-btn fab x-small style="background: transparent" elevation="10">
            <font-awesome-icon
              class="slide-icon"
              icon="fa-solid fa-circle-chevron-left"
              font-size="36px"
            />
          </v-btn>
        </div>
      </template>
      <template v-slot:next>
        <div
          class="position-absolute"
          v-if="showNextButton"
          @click="increaseSlideCount()"
        >
          <v-btn fab x-small style="background: transparent" elevation="10">
            <font-awesome-icon
              class="slide-icon"
              icon="fa-solid fa-circle-chevron-right"
              font-size="36px"
            />
          </v-btn>
        </div>
      </template>
    </v-slide-group>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class extends Vue {
  model = null;

  data = [
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
    {
      name: "DucNhu",
      avatar:
        "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3",
    },
  ];

  showNextButton = true;
  showprevButton = false;
  slideCount = 0;

  increaseSlideCount() {
    this.slideCount++;
  }
  decreaseSlideCount() {
    this.slideCount--;
  }

  @Watch("slideCount", { immediate: true })
  toggleIconSlide() {
    this.showprevButton = this.slideCount > 0 ? true : false;
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

::v-deep .v-slide-group__prev {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

.slide-icon {
  color: #fff !important;
}
</style>
