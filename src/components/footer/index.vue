<template>
    <div class="footer">
      <div class="foot-con">
      <div class="title-line">
      <span class="title" @click="$router.push('/')">| 网站首页 </span>
      <span class="title" @click="$router.push('/develop/list')">| 技术总结 </span>
      <span class="title" @click="$router.push('/read/list')">| 书籍分享</span>
      <span class="title" @click="$router.push('/livesty/list')">| 生活日志 |</span>
      </div>
      <div class="beian">Copyright © 2020 WJCID | <span @click="go(url)" style="cursor:pointer">{{aq}} </span></div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      url: 'http://beian.miit.gov.cn',
      aq: '京ICP备2020045700号'
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
  @media screen and (max-width:768px) {
    .beian {
      padding: 0px 10px;
    }
  }
</style>