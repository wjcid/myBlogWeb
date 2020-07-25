// 生活日志
export default {
    path: '/livesty/',
    name: 'livesty',
    component: resolve => { require(['@/views/livesty'], resolve) },
    children: [
      {
        path: 'list',
        component: resolve => require(['@/views/livesty/list'], resolve)
      },
      {
        path: 'con/:id',
        component: resolve => require(['@/views/livesty/article/index.vue'], resolve)
      }
    ]
  }