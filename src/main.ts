import Vue from "vue";
import App from "./App.vue";
import { registerAmplify } from "./plugins/amplify-register";
import vuetify from "./plugins/vuetify";
import router from "./router";
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@/plugins/font-awesome-icons";

import {
  applyPolyfills,
  defineCustomElements,
} from "@aws-amplify/ui-components/loader";
import { componentRegister } from "./plugins/component-register";

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.ignoredElements = [/amplify-\w*/];
applyPolyfills().then(() => {
  defineCustomElements(window);
});

registerAmplify();
componentRegister();
Vue.config.productionTip = false;
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
