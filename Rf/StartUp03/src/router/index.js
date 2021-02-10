import { createWebHistory, createRouter } from "vue-router";
// import Home from "@/views/Home.vue";
import Home from "../views/Home/index.vue";
import About from "../views/About/index.vue";
import NotFound from "../views/NotFound/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;