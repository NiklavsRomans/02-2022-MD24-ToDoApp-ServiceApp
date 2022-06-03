import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PlannerView from "../views/PlannerView.vue";
import ServiceView from "../views/ServiceView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Planner",
    component: PlannerView,
  },
  {
    path: "/services",
    name: "Service",
    component: ServiceView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
