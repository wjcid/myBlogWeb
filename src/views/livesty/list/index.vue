<template>
<div>
    <Header />
    <div class="binner">
      <div class="bin_div">
        <div class="bin_title">航海日志</div>
        <div class="bin_msg">生活就像航海，充满未知和挑战 <span v-if='$store.state.width<768?false:true'>| </span> 
          <br v-if='$store.state.width>768?false:true'> <i class="el-icon-notebook-2"></i> 文章总数：{{artcount}}</div>
      </div>
    </div>
    <!-- CANVAS 背景 -->
    <!-- <CanvasBg v-if='$store.state.width<768?false:true'/> -->
    <div class="con_main" id="con_main">
        <div class="con_list">
            <el-row :gutter="20">
                <el-col :lg="16" :xs="24">
                    <el-card shadow="always" :body-style="{ padding: '0px' }" v-for="art in art_list.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="art.id">
                      <div class="img_div"><el-image :src="art.pic_url" lazy></el-image></div>
                      <div class="card-div" @click="$router.push('/livesty/con/'+art.id)" style="cursor: pointer;">
                          <div class="card-title">{{art.title}}</div>
                          <div class="card-tag">标签：
                            <el-tag class="list-tag" style="margin:5px 5px;" 
                              v-for="(tagd,key) in art.tag.split(',')" :key="key"
                              :type="tagtypes[Math.floor(Math.random() *5)]">{{tagd}}</el-tag></div>
                          <div class="card-time"><i class="el-icon-date"></i> {{art.create_time}}</div>
                      </div>
                    </el-card>
                </el-col>
                <el-col :span="8" v-if='$store.state.width<768?false:true'>
                    <Sidebar :tag_list="tag_list" :brolist="brolist" :time_list="time_list" @event1="change" :page_type="page_type" :route_url="route_url"/>
                </el-col>
            </el-row>
             <el-pagination
              background
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              layout="prev, pager, next"
              :total="artcount"
              :page-size="pagesize">
            </el-pagination>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
export default {
  data () {
      return {
        page_type: 3,
        route_url: '/livesty/con/',
        tagtypes: ['','info','warning','success','danger'],
        artcount: 0,
        currentPage:1, //初始页
        pagesize:5,    //每页的数据
        brolist: [],
        art_list: [],
          tag_list: [
            {
              inedx: 1,
              name: '兴趣',
              gourl: '/',
              type: 'warning'
            },
            {
              inedx: 2,
              name: '健康',
              gourl: '/',
              type: 'success'
            },
            {
              inedx: 3,
              name: '杂谈',
              gourl: '/',
              type: 'info'
            }
          ],
          time_list: [
            {
              index: 1,
              name: '2020-07',
              num: 2
            }
          ],
      }
  },
  created () {
    this.rankList();
    this.artList();
  },
  methods: {
    handleCurrentChange: function(currentPage){
      this.currentPage = currentPage;
    },
    rankList(){
      this.$axios.post(this.$consts.BASE_URL+'rankList', {
          type:3
        }).then(res=>{
          this.brolist = res.data.data.rankList
        })
    },
    artList(){
      this.$axios.post(this.$consts.BASE_URL+'artWebList', {
          type:3
        }).then(res=>{
          this.art_list = res.data.data.artList
          this.artcount = this.art_list.length
        })
    },
    change(data){
       this.art_list = data
       this.artcount = this.art_list.length
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
}
.card-div {
    width: 50%;
    height: 240px;
    float: right;
}
.card-title {
    padding: 50px 30px 10px 30px;
    font-size: 20px;
    text-align: left;
}
.card-tag {
    padding: 0px 30px;
    font-size: 14px;
    text-align: left;
}
.list-tag {
  padding: 0px 5px;
  height: 20px;
  line-height: 20px;
}
.card-time {
  padding: 10px 30px;
  font-size: 14px;
  text-align: left;
}
.img_div {
  width: 50%;
  height: 240px;
  float: left;
  overflow: hidden;
}
.el-image {
  transition: all 0.6s;
}
.el-image:hover {
    transform: scale(1.2); /* 放大1.2倍 */
}
@media screen and (max-width:768px) {
  .con_list {
    width: 95%;
  }
  .binner {
    height: 300px;
  }
  .bin_div {
    position:absolute;
    left: 30px;
    bottom:50px;
  }
  .bin_title {
    font-size: 20px;
  }
  .card-div {
    width: 50%;
    height: 123px;
    float: right;
  }
  .card-title {
      padding: 10px;
      font-size: 16px;
      text-align: left;
  }
  .img_div {
    width: 50%;
    height: 123px;
    float: left;
    overflow: hidden;
  }
  .card-tag {
    padding: 0px 10px;
    font-size: 14px;
    text-align: left;
  }
  .card-time {
    padding: 5px 10px;
    font-size: 14px;
    text-align: left;
  }
  .con_main {
    width: 100%;
    padding-bottom: 60px;
  }
}
</style>