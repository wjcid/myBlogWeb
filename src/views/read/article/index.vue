<template>
<div>
    <Header />
    <div class="binner">
      <div class="bin_div">
        <div class="bin_title">{{title}}</div>
        <div class="bin_msg">勤思考，多总结</div>
        <div class="bin_msg">
          <span><i class="el-icon-date" style="padding:0 10px 0 0;"></i>{{create_time}}</span>
          <span><i class="el-icon-view" style="padding:0 10px 0 20px"></i>{{read_num}}</span>
        </div>
      </div>
    </div>
    <!-- CANVAS 背景 -->
    <!-- <CanvasBg v-if='$store.state.width<768?false:true'/> -->
    <div class="con_main" id="con_main">
        <el-card shadow="always">
            <div class="content" v-html="content" v-highlight></div>
              <div class="copyright">
                作者：wjcid
                <br />
                版权声明：本文为原创文章，遵循 CC 4.0 BY 版权协议，转载请附上原文出处链接和本声明。
                <br />
                本文链接：https://www.wjcid.com/#{{art_url}}
              </div>
            <el-row :gutter="10">
              <el-col :lg="12" :xs="24" style="cursor: pointer;">
                <div @click="$router.push({path:'/read/con/'+last_id},onComplete => {},onAbort => {})">
                <i class="el-icon-arrow-left" style="padding:0 10px;"></i>上一篇：{{last_title}}
                </div>
              </el-col>
              <el-col :lg="12" :xs="24" style="cursor: pointer;">
                <div @click="$router.push({path:'/read/con/'+next_id},onComplete => {},onAbort => {})">
                下一篇：{{next_title}}<i class="el-icon-arrow-right" style="padding:0 10px;"></i>
                </div>
              </el-col>
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
          type:2,
          id:this.$route.params.id
        }).then(res=>{
          console.log(res.data.code)
        })
    },
    artContent(){
      this.$axios.post(this.$consts.BASE_URL+'artContent', {
          id:this.$route.params.id,
          type:2
        }).then(res=>{
          this.content = res.data.data.content.content
          this.title = res.data.data.content.title
          this.create_time = res.data.data.content.create_time
          this.read_num = res.data.data.content.read_num
          this.last_title = res.data.data.ud.last_title
          this.next_title = res.data.data.ud.next_title
          this.last_id = res.data.data.ud.last_id
          this.next_id = res.data.data.ud.next_id
          this.art_url = this.$route.path
        })
    }
  },
  data () {
      return {
        title: '',
        art_url: '',
        create_time: '2020-12-12 11:11:11',
        read_num: 0,
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
  background:#F5F5F5;
  color: #999;
}
.el-col:hover {
  background-color: #D8D8D8;
  color: #666;
}
.ql-syntax {
  background: black;
}
.copyright {
  padding: 8px;
  padding-left: 0;
  font-size: 14px;
  color: #6f6f82;
}

@media screen and (max-width:768px) {
  .binner {
    height: 300px;
  }
  .el-card {
    width: 95%;
  }
  .bin_div {
    position:absolute;
    left: 30px;
    bottom:30px;
  }
  .bin_title {
    font-size: 20px;
  }
  .upart {
    text-align: right;
    padding-right: 10px;
  }
  .dowart {
    text-align: left;
    padding-left: 10px;
  }
  .el-icon-d-arrow-left {
    padding-right: 20px;
    animation: icon-left-rig 1.5s infinite;
  }
  .el-icon-d-arrow-right {
    padding-left: 20px;
    animation: icon-left-rig 1.5s infinite;
  }
  @keyframes icon-left-rig {  
    0% {  
        transform: translate(0px, 0px);  
    }  
    50% {  
        transform: translate(10px, 0px);  
    }  
    100% {  
        transform: translate(0px, 0px);  
    }  
  }
}
</style>