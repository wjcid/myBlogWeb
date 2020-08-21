<template>
  <div class="b_nav">
    <div class="personal">
      <el-avatar :size="50" :src="circleUrl" style="margin-bottom:10px;"></el-avatar>
      <div style="padding-bottom:20px;">W J C</div>
      <div style="padding-bottom:10px;">
        <span @click="go(url1)"><el-avatar size="small" :src="circleUrl1" style="margin-right:15px;cursor: pointer;"></el-avatar></span>
        <span @click="go(url2)"><el-avatar size="small" :src="circleUrl2" style="margin-left:15px;cursor: pointer;"></el-avatar></span>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="menu">
      <el-menu :default-active="default_active" class="el-menu-vertical-demo">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">技术总结</el-menu-item>
        <el-menu-item index="3">书籍分享</el-menu-item>
        <el-menu-item index="4">生活日志</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Aside',
  data () {
    return {
      default_active: 1,
      url1: 'https://github.com/wjcid',
      url2: 'https://weibo.com/5949377623/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1',
      circleUrl: require('@/assets/img/baichi.jpg'),
      circleUrl1: require('@/assets/img/github.jpg'),
      circleUrl2: require('@/assets/img/weibo.jpg')
    }
  },
  methods: {
    go (e) {
      window.open(e, '_blank')
    }
  }
}
</script>
<style scoped>
  .b_nav {
    width: 100%;
    color: black;
  }
  .personal {
    margin-top: 20px;
  }
</style>
