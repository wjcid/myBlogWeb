<template>
    <div class="footer">
      <div class="foot-con">
      <div class="title-line">
      <span class="title">| 网站首页 </span>
      <span class="title">| 技术总结 </span>
      <span class="title">| 书籍分享</span>
      <span class="title">| 生活日志 |</span>
      </div>
      <div>Copyright © 2020 WJC的博客 | 备案号:<span @click="go(url)" style="cursor:pointer">{{aq}} </span></div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      url: 'http://beian.miit.gov.cn',
      aq: '香港ECS无法备案,攒两年钱再换吧'
    }
  },
  methods: {
    go (e) {
      window.open(e, '_blank')
    }
  }
}
</script>
<style scoped lang="scss">
    .footer {
      height: 100px;
      padding-top:30px;
      color: $font-color;
      background-color: $foot-back-color;
      margin: auto;
    }
    .title-line {
      margin: auto;
      margin-bottom:10px;
    }
</style>