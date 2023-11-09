import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import HomeVue from "../pages/Home.vue";

const routes: RouteRecordRaw[] = [
  {
    name: "Home",
    path: "/",
    component: HomeVue
  },
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export { router }
