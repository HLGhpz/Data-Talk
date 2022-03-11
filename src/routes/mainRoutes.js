const mainRoutes = [{
  name: 'home',
  path: '/',
  component: () => import('@/views/Home.vue'),
}, {
  name: 'table',
  path: '/table',
  component: () => import('@/views/Table.vue'),
}, {
  name: 'test',
  path: '/test',
  component: () => import('@/views/Test.vue'),
}
]

export default mainRoutes