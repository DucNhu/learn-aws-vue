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
    beforeEnter: async (to, _, next) => {
      const isAuthenticated = await Auth.currentUserInfo();
      if (!isAuthenticated) {
        next("/login");
      } else {
        next();
      }
    },
    children: [
      {
        path: "/photos",
        component: () => import("../views/photos-page.vue"),
      },
      {
        path: "/profile/:id",
        component: () => import("../views/profile/profile.vue"),
      },
      {
        path: "/account",
        name: "/account",
        redirect: "/account/edit",
        component: () => import("../views/profile/edit-view.vue"),
        children: [
          {
            path: "edit",
            component: () => import("../views/profile/edit-info.vue"),
          },
          {
            path: "password/change",
            component: () => import("../views/profile/edit-info.vue"),
          },
          {
            path: "help",
            component: () => import("../views/profile/edit-info.vue"),
          },
          {
            path: "edit",
            component: () => import("../views/profile/edit-info.vue"),
          },
        ],
      },
      {
        path: "/about",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "/test",
        component: () => import("../components/test-folder/HelloWorld.vue"),
      },
      {
        path: "/test-storage",
        component: () => import(".././components/test-folder/test-storage.vue"),
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
    beforeEnter: async (to, _, next) => {
      const isAuthenticated = await Auth.currentUserInfo();

      if (!isAuthenticated) {
        next("/login");
      } else {
        const user = await Auth.currentAuthenticatedUser();
        // Returns an array of groups
        const groups =
          user.signInUserSession.accessToken.payload["cognito:groups"];
        if (groups == undefined || groups[0] != "admin") next("/");
        else next();
      }
    },
  },
  {
    path: "**",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
