<template>
  <v-card class="rounded-lg">
    <v-card-title class="justify-center lighten-2 border-bottom card-subtitle">
      {{ step }}
    </v-card-title>

    <v-card-text class="min-height-40vh position-relative pa-0">
      <!-- Step 1 -->
      <div class="choose-img" v-if="step == 'Tạo bài viết mới'">
        <svg
          aria-label="Biểu tượng thể hiện file phương tiện, chẳng hạn như hình ảnh hoặc video"
          color="#262626"
          fill="#262626"
          height="77"
          role="img"
          viewBox="0 0 97.6 77.3"
          width="96"
        >
          <path
            d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
            fill="currentColor"
          ></path>
          <path
            d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
            fill="currentColor"
          ></path>
          <path
            d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
            fill="currentColor"
          ></path>
        </svg>
        <div class="my-3">
          <h5 class="">Kéo ảnh và video vào đây</h5>
        </div>
        <v-btn class="mt-2" color="info">
          <label for="media-input">Chọn từ máy tính</label>
        </v-btn>
        <v-file-input
          @change="chooseImage($event)"
          multiple
          style="height: 0px"
          id="media-input"
          class="pa-0"
          height="0"
          prepend-icon="clearable"
          outlined
          hide-input
        >
        </v-file-input>
      </div>
      <!-- Step 2 -->
      <div v-if="step == 'Cắt'">
        <!--  -->
        <v-window show-arrows>
          <template v-slot:prev="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" @click="prev()">
              <v-icon class="text-white">mdi-chevron-left</v-icon>
            </v-btn>
          </template>
          <template v-slot:next="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" @click="next()">
              <v-icon class="text-white">mdi-chevron-right</v-icon>
            </v-btn>
          </template>
          <v-window-item v-for="(item, index) in newFiles" :key="index">
            <img :src="item" :alt="item" class="img-fluid" />
          </v-window-item>
          <v-item-group v-model="onboarding" class="text-center" mandatory>
            <v-item
              v-for="n in newFiles.length"
              :key="`btn-${n}`"
              v-slot="{ active, toggle }"
            >
              <v-btn
                :input-value="active"
                icon
                @click="toggle"
                disabled
                x-small
              >
                <v-icon>mdi-record</v-icon>
              </v-btn>
            </v-item>
          </v-item-group>
        </v-window>
        <v-speed-dial
          class="position-absolute"
          bottom
          left
          :transition="transition"
          :open-on-hover="hover"
        >
          <template v-slot:activator>
            <v-btn v-model="fab" icon small>
              <v-icon v-if="fab" color="#000"> mdi-arrow-expand </v-icon>
              <v-icon v-else color="#fff"> mdi-arrow-expand </v-icon>
            </v-btn>
          </template>
          <v-btn fab dark small color="green">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn fab dark small color="indigo">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn fab dark small color="red">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-speed-dial>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

const stepByStep = ["Tạo bài viết mới", "Cắt", "Chỉnh sửa", "Đăng bài viết"];
@Component
export default class extends Vue {
  step = stepByStep[0];
  newFiles: any[];
  onboarding = 0;
  fab = false;
  hover = false;
  transition = "slide-y-reverse-transition";
  mounted() {
    // const canvas: any = document.getElementById("output");
    // const img: any = document.getElementById("scream");
    // canvas.width = img.width;
    // canvas.height = img.height;
    // const context = canvas.getContext("2d");
    // context.filter = "grayscale(100%)";
    // context.drawImage(img, 0, 0)
  }

  // Step 1
  chooseImage(event) {
    this.newFiles = event.map((item) => URL.createObjectURL(item));
    this.step = stepByStep[1];
  }

  next() {
    this.onboarding =
      this.onboarding + 1 === this.newFiles.length ? 0 : this.onboarding + 1;
  }
  prev() {
    this.onboarding =
      this.onboarding - 1 < 0 ? this.newFiles.length - 1 : this.onboarding - 1;
  }
}
</script>

<style scoped>
.min-height-40vh {
  min-height: 40vh;
}

.choose-img {
  width: 100%;
  text-align: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
