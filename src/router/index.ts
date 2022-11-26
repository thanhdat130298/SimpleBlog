import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/ListPage.vue";
import AboutView from "../views/AboutView.vue";
import PostDetail from "../views/PostDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/posts",
      name: "posts",
      component: Home,
    },
    {
      path: "/posts/:id",
      name: "postsDetail",
      component: PostDetail,
    },
    {
      path: "/manage",
      name: "manage",
      component: AboutView,
    },
  ],
});

export default router;
