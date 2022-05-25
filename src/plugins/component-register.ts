import Vue from "vue";

export const componentRegister = () => {
  Vue.component(
    "global-load",
    () => import("@/components/global-load/global-load.vue")
  );
};
