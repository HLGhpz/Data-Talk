const mainRoutes = [{
  name: 'home',
  path: '/',
  component: () => import('@/views/Home.vue'),
}, {
  name: 'table',
  path: '/table',
  component: () => import('@/views/Table.vue'),
}, {
  name: 'tableEdit',
  path: '/tableEdit',
  component: () => import('@/views/TableEdit.vue'),
}
]

const routes = [
  {
    name: 'layout',
    path: '/',
    component: () => import("@/layout/index.vue"),
    children: [...mainRoutes]
  }
]

export default routes