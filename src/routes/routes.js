import mainRoutes from "./mainRoutes"

const routes = [
  {
    name: 'layout',
    path: '/',
    component: () => import("@/layout/index.vue"),
    children: [...mainRoutes]
  }
]

export default routes