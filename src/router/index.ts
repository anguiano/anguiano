import { createRouter, createWebHistory } from "vue-router";
import type {
  RouteLocationNormalized,
  RouteRecordRaw,
  NavigationGuardNext,
} from "vue-router";

const baseRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () =>
      import("@/views/WelcomePage.vue"),
      name: "WelcomePage",  
    meta: { title: "Welcome" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/PageNotFound.vue"),
    meta: { title: "Not Found" },
  },
];

const routes = baseRoutes;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return {
        ...savedPosition,
        behavior: "smooth",
      };
    } else if (
      to.name === from.name &&
      to.hash !== "" &&
      to.hash !== from.hash
    ) {
      return;
    }
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});
router.onError((error: unknown) => {
  console.log("VueJS router error handler", error);
});
router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    window.document.title = `Gencode - ${to.meta.title}`;
    next();
  }
);
router.afterEach(() => {

});

export default router;
