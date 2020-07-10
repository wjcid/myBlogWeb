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
                    <div class="book" v-for="(binfo, index) in book_list" :key="index">
                      <el-image :src="binfo.src" lazy></el-image>
                      <div class="book-name">{{binfo.name}}</div>
                      <div class="book-info"> 
                        <el-tag class="list-tag" style="margin:5px 5px;" :type="binfo.tag_type">{{binfo.tag_name}}</el-tag> |
                        <span><i class="el-icon-collection"></i> {{binfo.time}}</span>
                      </div>
                      <el-divider></el-divider>
                    </div>
                </el-col>
                
                <el-col :span="8">
                    <Sidebar :tag_list="tag_list" :brolist="brolist" :time_list="time_list"/>
                </el-col>
            </el-row>
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
      src1: require('@/assets/img/1900568573_ii_cover.jpg'),
      book_list: [
        {
          name: '穷查理宝典',
          src: require('@/assets/img/1900568573_ii_cover.jpg'),
          tag_type: 'warning',
          tag_name: '理财',
          time: '2020-07-10'
        },
        {
          name: '明朝那些事儿',
          src: require('@/assets/img/1900505579_ii_cover.jpg'),
          tag_type: 'danger',
          tag_name: '小说',
          time: '2020-07-01'
        },
        {
          name: '大话设计模式',
          src: require('@/assets/img/1900655515_ii_cover.jpg'),
          tag_type: '',
          tag_name: '码农技术',
          time: '2020-07-01'
        },
        {
          name: 'Redis实战',
          src: require('@/assets/img/1900722520_ii_cover.jpg'),
          tag_type: '',
          tag_name: '码农技术',
          time: '2020-07-01'
        },
        {
          name: '人性的枷锁',
          src: require('@/assets/img/1901127971_ii_cover.jpg'),
          tag_type: 'danger',
          tag_name: '小说',
          time: '2020-07-01'
        },
        {
          name: '指数基金投资指南',
          src: require('@/assets/img/1900761185_ii_cover.jpg'),
          tag_type: 'warning',
          tag_name: '理财',
          time: '2020-07-01'
        },
        {
          name: '漫长的告别',
          src: require('@/assets/img/1901086943_ii_cover.jpg'),
          tag_type: 'danger',
          tag_name: '小说',
          time: '2020-07-01'
        },
        {
          name: '穷爸爸富爸爸',
          src: require('@/assets/img/1900724085_ii_cover.jpg'),
          tag_type: 'warning',
          tag_name: '理财',
          time: '2020-07-01'
        },
        {
          name: '男人来自火星女人···',
          src: require('@/assets/img/1900544464_ii_cover.jpg'),
          tag_type: 'success',
          tag_name: '心理',
          time: '2020-07-01'
        },
        {
          name: '高性能MySQL',
          src: require('@/assets/img/1900716972_ii_cover.jpg'),
          tag_type: '',
          tag_name: '码农技术',
          time: '2020-07-01'
        }
        
      ],
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
        brolist: [
          {
            index: 1,
            name: '《漫长的告别》',
            num: '34'
          },
          {
            index: 2,
            name: '《穷查理宝典》',
            num: '34'
          },
          {
            index: 3,
            name: '《明朝那些事》',
            num: '34'
          },
          {
            index: 4,
            name: '《人性的枷锁》',
            num: '34'
          },
          {
            index: 5,
            name: '《穷爸爸富爸爸》',
            num: '34'
          }
        ],
        time_list: [
          {
            index: 1,
            name: '2020-07',
            num: 6
          }
        ],
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