import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/ListPage.vue";
import ManagePage from "../views/ManagePage.vue";
import PostDetail from "../views/PostDetail.vue";
import Login from "../views/LoginPage.vue";
import { LayoutType } from "../types/enum";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: () => import("../views/AboutView.vue"),
      meta: { layout: LayoutType.default },
    },
    {
      path: "/posts",
      name: "posts",
      component: Home,
      meta: { layout: LayoutType.default },
    },
    {
      path: "/posts/:id",
      name: "postsDetail",
      component: PostDetail,
      meta: { layout: LayoutType.default },
    },
    {
      path: "/manage",
      name: "manage",
      component: ManagePage,
      meta: { layout: "default-layout" },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { layout: "authen-layout" },
    },
  ],
});

export default router;
