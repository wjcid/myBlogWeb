// 技术总结
export default {
    path: '/develop/',
    name: 'develop',
    component: resolve => { require(['@/views/develop'], resolve) },
    children: [
      {
        path: 'list',
        component: resolve => require(['@/views/develop/list'], resolve)
      },
      {
        path: '1',
        component: resolve => require(['@/views/develop/article/index.vue'], resolve)
      },
      {
        path: '2',
        component: resolve => require(['@/views/develop/article/index_1.vue'], resolve)
      },
      {
        path: '3',
        component: resolve => require(['@/views/develop/article/index_2.vue'], resolve)
      },
      {
        path: '4',
        component: resolve => require(['@/views/develop/article/index_3.vue'], resolve)
      }
    ]
  }