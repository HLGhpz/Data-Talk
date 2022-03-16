const mainRoutes = [{
  name: 'home',
  path: '/',
  component: () => import('@/views/Home.vue'),
}, {
  name: 'table',
  path: '/table',
  component: () => import('@/views/TableView/Table.vue'),
}, {
  name: 'test',
  path: '/test',
  component: () => import('@/views/TestView/Test.vue'),
},{
  name: 'kaoyan',
  path: '/chart',
  component: () => import('@/chartView/kaoyan.vue'),
}
]

export default mainRoutes