<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  created() {
    //获取界面宽高
    this.$_getSize();
    //修改状态宽高
    this.$_resize();
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    },
    $_getSize() {
      this.$store.commit('CHANGE_SIZE', { width: this.wwidth(), height: this.wheight() });
    },
    $_resize() {
      window.onresize = () => {
        this.$_getSize();
      }
    },
    wwidth() {
      return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidht
    },
    wheight() {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
  }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 0 auto;
}
body{
  margin: 0px;
  background: white;
}
</style>
