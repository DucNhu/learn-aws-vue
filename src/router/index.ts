import { Auth } from "aws-amplify";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/photos",
    component: HomeView,
    // beforeEnter: async (to, _, next) => {
    //   const isAuthenticated = await Auth.currentUserInfo();

    //   if (!isAuthenticated) {
    //     console.log(1);

    //     next("/login");
    //   } else {
    //     next();
    //   }
    // },
    children: [
      {
        path: "/photos",
        component: () => import("../views/Photo-page.vue"),
      },
      {
        path: "/about",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "/test",
        component: () => import(".././components/HelloWorld.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("../views/Authentication.vue"),
  },
  {
    path: "/admin",
    component: () => import("../views/admin/dashboard-page.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
