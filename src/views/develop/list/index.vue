<template>
<div>
    <Header />
    <div class="binner">
      <div class="bin_div">
        <div class="bin_title">技术总结</div>
        <div class="bin_msg">勤思考，多总结 | <i class="el-icon-notebook-2"></i> 文章总数：{{artcount}}</div>
      </div>
    </div>
    <CanvasBg />
    <div class="con_main" id="con_main">
        <div class="con_list">
            <el-row :gutter="20">
                <el-col :span="16">
                    <el-card shadow="always" :body-style="{ padding: '0px' }" v-for="art in art_list" :key="art.id">
                      <div class="img_div"><el-image :src="art.src" lazy></el-image></div>
                      <div class="card-div" @click="$router.push(art.route)" style="cursor: pointer;">
                          <div class="card-title">{{art.title}}</div>
                          <div class="card-tag">标签：<el-tag class="list-tag" style="margin:5px 5px;" v-for="tagd in art.arttag" :key="tagd.index" :type="tagd.type">{{tagd.name}}</el-tag></div>
                          <div class="card-time"><i class="el-icon-date"></i> {{art.time}}</div>
                      </div>
                    </el-card>
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
      art_list: [
        {
          id: 2,
          title: 'PHP7新特性总结',
          time: '2020-07-06',
          src: require('@/assets/img/6.jpg'),
          route: '/develop/'+2,
          arttag: [
            {
              inedx: 1,
              name: 'PHP',
              gourl: '/',
              type: ''
            }
          ]
        },
        {
          id: 3,
          title: 'MySQL优化方法总结（一）',
          time: '2020-07-06',
          src: require('@/assets/img/8.jpg'),
          route: '/develop/'+3,
          arttag: [
            {
              inedx: 2,
              name: '数据库',
              gourl: '/',
              type: 'info'
            }
          ]
        },
        {
          id: 1,
          title: '阿里云搭建ss fq代理',
          time: '2020-07-06',
          src: require('@/assets/img/7.jpg'),
          route: '/develop/'+1,
          arttag: [
            {
              inedx: 3,
              name: 'Linux',
              gourl: '/',
              type: 'warning'
            }
          ]
        },
        {
          id: 4,
          title: 'vue生命周期',
          time: '2020-07-06',
          src: require('@/assets/img/9.jpg'),
          route: '/develop/'+4,
          arttag: [
            {
              inedx: 4,
              name: 'Vue',
              gourl: '/',
              type: 'success'
            }
          ]
        }
      ],
        tag_list: [
          {
            inedx: 1,
            name: 'PHP',
            gourl: '/',
            type: ''
          },
          {
            inedx: 2,
            name: '数据库',
            gourl: '/',
            type: 'info'
          },
          {
            inedx: 3,
            name: 'Linux',
            gourl: '/',
            type: 'warning'
          },
          {
            inedx: 4,
            name: 'Vue',
            gourl: '/',
            type: 'success'
          },
          {
            inedx: 5,
            name: 'go',
            gourl: '/',
            type: 'danger'
          }
        ],
        brolist: [
          {
            index: 1,
            name: '阿里云搭建ss fq代理',
            num: '34'
          },
          {
            index: 2,
            name: 'PHP7新特性总结',
            num: '33'
          },
          {
            index: 3,
            name: 'MySQL优化方法总结（一）',
            num: '32'
          },
          {
            index: 4,
            name: 'vue生命周期',
            num: '31'
          },
          {
            index: 5,
            name: '基于JwtAuth实现API验证',
            num: '30'
          },
          {
            index: 6,
            name: '前端AES加密，后端解密',
            num: '29'
          },
          {
            index: 7,
            name: 'Linux常用命令',
            num: '28'
          }
        ],
        time_list: [
          {
            index: 1,
            name: '2020-07',
            num: 7
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
</style>