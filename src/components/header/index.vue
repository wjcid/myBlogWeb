<template>
<div class="header">
    <div class="icon" @click="$router.push('/')" style="cursor: pointer;">
        W J C I D
    </div>
    <nav v-if='$store.state.width<768?false:true'>
        <a @click="$router.push({path:menu.route},onComplete => {},onAbort => {})" v-for="(menu, index) in $consts.NAV_MENUS" :key="index" style="cursor: pointer;">{{menu.title}}</a>
        <div id="indicator"></div>
    </nav>
    <!-- 更多 -->
    <div v-if='$store.state.width<768?true:false'>
      <div 
        class='more'
        @click="drawer = true">
        <i class="el-icon-more"></i>     
      </div>
      <el-drawer title="菜单" :visible.sync="drawer" :modal="false" :with-header="false">
        <Aside />
      </el-drawer>
    </div>
</div>
</template>
<script>
import Aside from '@/components/aside'
export default {
  name: 'Header',
  components: {   
    Aside
  },
  data () {
      return {
          drawer: false,
      }
  }
}
</script>
<!-- 导航栏特效 -->
<style src="./css/style.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
    color: white;
    position: absolute;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 60px;
}
.v-modal{
    z-index: 0;
}
.more {
   width: 10%;
   height: 60px;
   line-height: 60px;
   float: right;
   padding-right: 20px;
}
.el-icon-more {
    color: white;
    font-size: 25px;
    cursor: pointer;
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