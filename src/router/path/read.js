// 书籍分享
export default {
    path: '/read',
    name: 'read',
    component: resolve => { require(['@/views/read'], resolve) },
    children: [
      {
        path: 'list',
        component: resolve => require(['@/views/read/list'], resolve)
      },
      {
        path: 'con/:id',
        component: resolve => require(['@/views/read/article/index.vue'], resolve)
      }
    ]
  }