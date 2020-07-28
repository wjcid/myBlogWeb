<template>
<div class="header">
    <div class="icon" @click="$router.push('/')" style="cursor: pointer;">
        W J C
    </div>
    <nav>
        <a @click="$router.push({path:menu.route},onComplete => {},onAbort => {})" v-for="(menu, index) in $consts.NAV_MENUS" :key="index" style="cursor: pointer;">{{menu.title}}</a>
        <div id="indicator"></div>
    </nav>
    
</div>
</template>
<script>
export default {
  name: 'Header',
  data () {
      return {
          activeIndex: 1
      }
  }
}
</script>
<!-- 导航栏特效 -->
<style src="./css/style.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->`
<style scoped lang="scss">
.header {
    color: white;
    position: absolute;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 60px;
}
.icon {
    font-size: 20px;
    font-weight:900;
    text-shadow:1px 1px 0px white,-1px -1px 0px white,1px 1px 0px white,-1px -1px 0px white;
    width: 30%;
    height: 60px;
    line-height: 60px;
    float: left;
}
</style>