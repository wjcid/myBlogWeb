<template>
<div>
    <Header />
    <div class="binner">
      <div class="bin_div">
        <div class="bin_title">{{title}}</div>
        <div class="bin_msg">勤思考，多总结</div>
      </div>
    </div>
    <CanvasBg />
    <div class="con_main" id="con_main">
        <el-card shadow="always">
            <div class="content" v-html="content" v-highlight></div>
            <div class="upload">
              <a href=""> 点击下载文档</a>  <div style="font-size:14px;color:red;">*我自己总结的word文档</div>
            </div>
            <el-row :gutter="10">
              <el-col :span="12" style="cursor: pointer;"><div @click="$router.push({path:'/develop/con/'+last_id},onComplete => {},onAbort => {})">上一篇：{{last_title}}</div></el-col>
              <el-col :span="12" style="cursor: pointer;"><div @click="$router.push({path:'/develop/con/'+next_id},onComplete => {},onAbort => {})">下一篇：{{next_title}}</div></el-col>
            </el-row>
        </el-card>
    </div>
    <Footer />
</div>
</template>

<script>
export default {
  created () {
    this.addRead();
    this.artContent();
  },
  inject: ['reload'],
  watch: {
    '$route' () {
      this.reload()
    }
  },
  methods: {
    addRead(){
      this.$axios.post(this.$consts.BASE_URL+'addRead', {
          type:3,
          id:this.$route.params.id
        }).then(res=>{
          console.log(res.data.code)
        })
    },
    artContent(){
      this.$axios.post(this.$consts.BASE_URL+'artContent', {
          id:this.$route.params.id,
          type:3
        }).then(res=>{
          this.content = res.data.data.content.content
          this.title = res.data.data.content.title
          this.last_title = res.data.data.ud.last_title
          this.next_title = res.data.data.ud.next_title
          this.last_id = res.data.data.ud.last_id
          this.next_id = res.data.data.ud.next_id
        })
    }
  },
  data () {
      return {
        title: '',
        content: '',
        last_id: 0,
        last_title: '',
        next_id: 0,
        next_title: ''
      }
  }
}
</script>

<style scoped lang="scss">
.binner {
    width: 100%;
    height: 500px;
    /*background: url(../../assets/img/suolong01.jpg);
    background-size: 100% 100%;*/
    background:linear-gradient(to top, rgb(255,255,255) 15%, rgb(110,215,255) 70%, rgb(75,100,255) 130%);
    position:relative;
}
.bin_div {
  text-align: left;
  position:absolute;
  left: 300px;
  bottom:120px;
}
.bin_title {
  font-size: 25px;
  padding-bottom: 10px;
}
.bin_msg {
  padding-bottom: 10px;
}
.con_list {
    width: 1200px;
    margin: 0 auto;
}
.con_main {
    width: 100%;
    padding-bottom: 30px;
}
.el-card {
  margin-bottom: 20px;
  width: 1200px;
  margin: 0 auto;
  text-align: left;
}
.content {
  padding-bottom: 50px;
}
.upload {
  padding-bottom: 50px;
}
.el-row {
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.el-col {
  background:linear-gradient(to top, rgb(255,255,255) 5%, rgb(110,215,255) 70%);
}
.ql-syntax {
  background: black;
}
</style>