<template>
  <v-row justify="center">
    <v-col cols="12" sm="8">
      <v-sheet class="grey lighten-5" rounded="lg">
        <div class="container-fluid tm-container-content">
          <v-sheet light class="mx-auto mb-4" rounded="lg">
            <slide-story />
          </v-sheet>

          <v-sheet
            light
            class="blog-box border rounded-lg"
            rounded="lg"
            v-for="n in 25"
            :key="n"
          >
            <div class="col-12 mb-5 pa-0">
              <v-card>
                <v-list-item>
                  <v-list-item-avatar>
                    <img
                      src="https://dogsnstuff.net/wp-content/uploads/2021/07/Why-are-dogs-so-cute-758x505.jpg"
                    />
                  </v-list-item-avatar>
                  <v-list-item-title>{{ "Jane Smith" }}</v-list-item-title>
                  <v-spacer />
                  <v-btn icon>
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </v-list-item>
                <v-img
                  :src="'https://dogsnstuff.net/wp-content/uploads/2021/07/Why-are-dogs-so-cute-758x505.jpg'"
                  height="400"
                />
                <!-- <v-card-actions>
                  <v-btn icon v-for="i in icons" :key="i.icon">
                    <Icon
                      :icon="i.icon"
                      :horizontalFlip="i.flip"
                      width="30"
                      height="30"
                    />
                  </v-btn>
                  <v-spacer />
                  <v-btn icon>
                    <Icon
                      icon="fluent:bookmark-16-regular"
                      width="30"
                      height="30"
                    />
                  </v-btn>
                </v-card-actions> -->
                <v-card-text style="font-weight: bold">1,012 likes</v-card-text>
                <v-card-text>
                  <span style="font-weight: bold">{{ "Jane Smith" }}</span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Pariatur tenetur veritatis placeat, molestiae impedit aut
                  provident eum quo natus molestias?
                </v-card-text>
                <v-card-text class="post-time">2 minutes ago</v-card-text>
                <v-divider />
                <v-card-actions>
                  <!-- <v-btn icon>
                    <Icon icon="octicon:smiley-24" width="30" height="30" />
                  </v-btn> -->
                  <v-text-field
                    placeholder="Add a comment"
                    hide-details
                    solo
                    flat
                  />
                  <v-btn text color="primary" style="text-transform: none"
                    >Post</v-btn
                  >
                </v-card-actions>
                <!-- <v-list-item two-line class="pl-4">
                <v-list-item-avatar size="45" class="my-0">
                  <img
                    src="https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/274992361_1575731389451190_7616248300771954862_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ptWdPrCqcKgAX_bJqmG&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_SAtfS91pXOZmVA2OGMESx0vwdazTTGBoJYYd0jXuIFw&oe=629308C3"
                  />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title class="subtitle-1 text-lg-h6"
                    >Jane Smith</v-list-item-title
                  >
                  <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <figure class="effect-ming tm-video-item">
                <img
                  src="https://www.moviemaker.com/wp-content/uploads/2022/01/Andrew-Garfield.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1"
                  alt="Image"
                  class="img-fluid"
                />
                <figcaption
                  class="d-flex align-items-center justify-content-center"
                >
                  <h2>Clocks</h2>
                  <a href="">View more</a>
                </figcaption>
              </figure>
              <div class="d-flex justify-content-between tm-text-gray px-4">
                <span class="tm-text-gray-light">18 Oct 2020</span>
                <span>9,906 views</span>
              </div> -->
              </v-card>
            </div>
          </v-sheet>
        </div>
      </v-sheet>
    </v-col>
    <v-col
      cols="12"
      sm="4"
      :class="$vuetify.breakpoint.width > 1000 ? 'd-block' : 'd-none'"
    >
      <v-sheet rounded="lg" min-height="268">
        <!--  -->
      </v-sheet>
    </v-col>
  </v-row>
  <!-- container-fluid, tm-container-content -->
</template>

<script lang="ts">
import { Auth } from "aws-amplify";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    "slide-story": () => import("./slide-story.vue"),
  },
})
export default class PhotoPage extends Vue {
  load = false;
  mounted() {
    Auth.currentAuthenticatedUser().then((response) => {
      console.log(response);
    });
  }
}
</script>

<style scoped>
.blog-box {
  margin-bottom: 1rem;
}
</style>
