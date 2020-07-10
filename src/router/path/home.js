// 首页
export default {
    path: '/',
    name: 'home',
    component: resolve => { require(['@/views/index/index.vue'], resolve) }
  }