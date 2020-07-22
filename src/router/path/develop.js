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
        path: 'con/:id',
        component: resolve => require(['@/views/develop/article/index.vue'], resolve)
      }
    ]
  }