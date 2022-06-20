<template>
  <v-card class="rounded-lg">
    <v-card-title
      class="justify-space-between lighten-2 border-bottom card-subtitle py-2 px-2"
    >
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <span>{{ step }}</span>
      <v-btn
        color="blue"
        text
        class="white--text text-capitalize"
        @click="toStep()"
      >
        Tiếp
      </v-btn>
    </v-card-title>

    <v-card-text class="min-height-40vh position-relative pa-0">
      <!-- Step 1 -->
      <div class="choose-img" v-if="step == stepByStep[0]">
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
      <div v-if="step == stepByStep[1]">
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
            <img
              :src="item.url"
              :alt="item.url"
              class="img-fluid"
              v-if="item.type.includes('image')"
            />
            <video
              :src="item.url"
              v-if="item.type.includes('video')"
              autoplay
            ></video>
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
            <v-btn v-model="fab" icon small class="grey darken-3">
              <v-icon v-if="fab" color="#000"> mdi-arrow-expand </v-icon>
              <v-icon v-else color="#fff"> mdi-arrow-expand </v-icon>
            </v-btn>
          </template>

          <v-btn
            dark
            large
            min-height="100%"
            class="ma-0 pa-0 rounded-0"
            @click="changeRatio(16 / 9)"
          >
            16/9
            <svg
              aria-label="Crop landscape icon"
              color="#8e8e8e"
              fill="#8e8e8e"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M19 20H5a4.004 4.004 0 01-4-4V8a4.004 4.004 0 014-4h14a4.004 4.004 0 014 4v8a4.004 4.004 0 01-4 4zM5 6a2.002 2.002 0 00-2 2v8a2.002 2.002 0 002 2h14a2.002 2.002 0 002-2V8a2.002 2.002 0 00-2-2z"
              ></path>
            </svg>
          </v-btn>
          <v-btn
            dark
            large
            min-height="100%"
            class="ma-0 pa-0 rounded-0"
            @click="changeRatio(4 / 3)"
          >
            4/3
            <svg
              aria-label="Crop portrait icon"
              color="#8e8e8e"
              fill="#8e8e8e"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M16 23H8a4.004 4.004 0 01-4-4V5a4.004 4.004 0 014-4h8a4.004 4.004 0 014 4v14a4.004 4.004 0 01-4 4zM8 3a2.002 2.002 0 00-2 2v14a2.002 2.002 0 002 2h8a2.002 2.002 0 002-2V5a2.002 2.002 0 00-2-2z"
              ></path>
            </svg>
          </v-btn>

          <v-btn
            dark
            large
            min-height="100%"
            class="ma-0 pa-0 rounded-0"
            @click="ratio = 1"
          >
            1/1
            <svg
              aria-label="Crop square icon"
              color="#ffffff"
              fill="#ffffff"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M19 23H5a4.004 4.004 0 01-4-4V5a4.004 4.004 0 014-4h14a4.004 4.004 0 014 4v14a4.004 4.004 0 01-4 4zM5 3a2.002 2.002 0 00-2 2v14a2.002 2.002 0 002 2h14a2.002 2.002 0 002-2V5a2.002 2.002 0 00-2-2z"
              ></path>
            </svg>
          </v-btn>
          <v-btn
            dark
            large
            min-height="100%"
            class="ma-0 pa-0 rounded-0 text-capitalize"
            @click="changeRatio('original')"
          >
            Nguyên mẫu
            <svg
              aria-label="Photo outline icon"
              class="_ab6-"
              color="#8e8e8e"
              fill="#8e8e8e"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M6.549 5.013A1.557 1.557 0 108.106 6.57a1.557 1.557 0 00-1.557-1.557z"
                fill-rule="evenodd"
              ></path>
              <path
                d="M2 18.605l3.901-3.9a.908.908 0 011.284 0l2.807 2.806a.908.908 0 001.283 0l5.534-5.534a.908.908 0 011.283 0l3.905 3.905"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <path
                d="M18.44 2.004A3.56 3.56 0 0122 5.564h0v12.873a3.56 3.56 0 01-3.56 3.56H5.568a3.56 3.56 0 01-3.56-3.56V5.563a3.56 3.56 0 013.56-3.56z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
          </v-btn>
        </v-speed-dial>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { BlogModel } from "@/aws/models";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  stepByStep = ["Tạo bài viết mới", "Cắt", "Chỉnh sửa", "Đăng bài viết"];
  ratio = "original";

  step = this.stepByStep[0];
  newFiles: any[];
  onboarding = 0;
  fab = false;
  hover = false;
  transition = "slide-y-reverse-transition";

  newBlog: BlogModel = null;
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
    this.newFiles = event.map((item) => {
      return {
        type: item.type,
        url: URL.createObjectURL(item),
      };
    });
    this.step = this.stepByStep[1];
  }

  // Step 2
  changeRatio(value) {
    this.ratio = value;
  }
  toStep() {
    console.log(this.ratio);
  }
  //
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

::v-deep.v-speed-dial__list {
  align-items: left;
}

::v-deeep .v-btn__content {
  font-size: 0.5rem !important;
}
</style>
