import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "/aa",
        name: "aa",
        component: () => import("../views/aa.vue"),
      },
    ],
  },

  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");
  if (token && to.path == "/login") {
    next("/");
  } else if (!token && to.path != "/login") {
    next("/login");
  } else {
    next();
  }
});
export default router;
