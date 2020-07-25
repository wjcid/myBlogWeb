<template>
<div>
    <Header />
    <div class="binner">
      <div class="bin_div">
        <div class="bin_title">书籍分享</div>
        <div class="bin_msg">不想一成不变的活着，所以不能停止学习 | <i class="el-icon-notebook-2" style="font-size:10px;"></i> 文章总数：{{artcount}}</div>
      </div>
    </div>
    <CanvasBg />
    <div class="con_main" id="con_main">
        <div class="con_list">
            <el-row :gutter="20">
                <el-col :span="16">
                    <div class="book" v-for="(binfo, index) in book_list.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index">
                      <el-image :src="binfo.pic_url" lazy @click="$router.push('/read/con/'+binfo.id)" style="cursor: pointer;"></el-image>
                      <div class="book-name">{{binfo.title}}</div>
                      <div class="book-info"> 
                        <el-tag class="list-tag" style="margin:5px 5px;" :type="binfo.tag_type">{{binfo.tag_name}}</el-tag> |
                        <span><i class="el-icon-collection"></i> {{binfo.create_time}}</span>
                      </div>
                      <el-divider></el-divider>
                    </div>
                </el-col>
                
                <el-col :span="8">
                    <Sidebar :tag_list="tag_list" :brolist="brolist" :time_list="time_list"/>
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
        artcount: 5,
        currentPage:1, //初始页
        pagesize:20,    //每页的数据
        src1: require('@/assets/img/1900568573_ii_cover.jpg'),
        book_list: [],
          tag_list: [
            {
              inedx: 1,
              name: '小说',
              gourl: '/',
              type: 'danger'
            },
            {
              inedx: 2,
              name: '理财',
              gourl: '/',
              type: 'warning'
            },
            {
              inedx: 3,
              name: '心理',
              gourl: '/',
              type: 'success'
            },
            {
              inedx: 4,
              name: '码农技术',
              gourl: '/',
              type: ''
            }
          ],
          brolist: [],
          time_list: [
            {
              index: 1,
              name: '2020-07',
              num: 6
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
          type:2
        }).then(res=>{
          this.brolist = res.data.data.rankList
        })
    },
    artList(){
      this.$axios.post(this.$consts.BASE_URL+'artWebList', {
          type:2
        }).then(res=>{
          this.book_list = res.data.data.artList.reverse()
          this.artcount = this.book_list.length
        })
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
.book {
  width: 20%;
  height: 285px;
  float: left;
}
.el-image {
  width: 80%;
  height: 180px;
}
.list-tag {
  padding: 0px 5px;
  height: 20px;
  line-height: 20px;
}
.book-info {
  font-size: 12px;
}
.el-divider--horizontal {
    display: block;
    height: 2px;
    width: 100%;
    margin: 20px 0;
}
</style>