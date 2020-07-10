// 书籍分享
export default {
    path: '/read',
    name: 'read',
    component: resolve => { require(['@/views/read/index.vue'], resolve) }
  }