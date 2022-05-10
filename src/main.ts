import Vue from "vue";
import App from "./App.vue";
import { registerAmplify } from "./plugins/amplify-register";
import vuetify from "./plugins/vuetify";
import router from "./router";
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
registerAmplify();
Vue.config.productionTip = false;
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
