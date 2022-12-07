import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  

  {
    path: "/app",
    component: () => import("../layout/App.vue"),
    children: [

      {
        path: "/",
        name: "Home",
        component: () => import("@/views/home/Index.vue"),
      },
      {
        path: "/membreships",
        name: "Membreships",
        component: () => import("@/views/membreships/Index.vue"),
      },
      {
        path: "/suplements",
        name: "Suplements",
        component: () => import("@/views/suplements/Index.vue"),
      },
      {
        path: "/sportwear",
        name: "Sportwear",
        component: () => import("@/views/sportwear/Index.vue"),
      },
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/auth/Index.vue"),
      },
    ]
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
