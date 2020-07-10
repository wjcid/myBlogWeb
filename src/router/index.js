import Vue from 'vue'
import Router from 'vue-router'
import home from '@/router/path/home.js' // 首页
import read from '@/router/path/read.js' // 阅读分享页
import develop from '@/router/path/develop.js' // 技术总结页
import livesty from '@/router/path/livesty.js' // 生活日志页

Vue.use(Router)

const router = new Router({
  routes: [
    home,
    read,
    develop,
    livesty
  ]
})


export default router