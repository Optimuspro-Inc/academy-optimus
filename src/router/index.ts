import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CohortView from "../views/CohortsView.vue";
import ResourceView from "../views/ResourcesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView, // This is the right component declaration
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"), // DO not use this type of componet declaration
    },
    {
      path: "/cohorts",
      name: "cohorts",
      component: CohortView,
    },
    {
      path: "/resources",
      name: "resources",
      component: ResourceView,
    },
  ],
});

export default router;
