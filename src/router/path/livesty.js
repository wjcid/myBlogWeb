// 生活日志
export default {
    path: '/livesty',
    name: 'livesty',
    component: resolve => { require(['@/views/livesty'], resolve) },
    children: [
      {
        path: 'list',
        component: resolve => require(['@/views/livesty/list'], resolve)
      },
      {
        path: '1',
        component: resolve => require(['@/views/livesty/article/index_1.vue'], resolve)
      }
    ]
  }