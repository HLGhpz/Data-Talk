import mainRoutes from "./mainRoutes"
// import chartRoutes from "./chartRoutes"

const routes = [
  {
    name: 'layout',
    path: '/',
    component: () => import("@/layout/index.vue"),
    children: [...mainRoutes]
  }
]

export default routes