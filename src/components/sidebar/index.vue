<template>
<div class="sidebar">
    <div class="personal">
      <el-card shadow="always">
        <el-avatar :size="50" :src="circleUrl" style="margin-bottom:10px;"></el-avatar>
        <div style="padding-bottom:20px;">W J C</div>
        <div style="padding-bottom:20px;"><i class="el-icon-message"></i> email：17600132820@163.com</div>
        <div style="padding-bottom:10px;">
          <span @click="go(url1)"><el-avatar size="small" :src="circleUrl1" style="margin-right:15px;cursor: pointer;"></el-avatar></span>
          <span @click="go(url2)"><el-avatar size="small" :src="circleUrl2" style="margin-left:15px;cursor: pointer;"></el-avatar></span>
        </div>
      </el-card>
    </div>
    <div class="tag">
      <el-card shadow="always">
        <div style="padding-bottom:20px;"><i class="el-icon-collection-tag"></i> 分类标签</div>
        <div>
          <el-tag style="margin:5px 5px;cursor:pointer;" v-for="tagd in tag_list" :key="tagd.index" :type="tagd.type"  @click="tagArtList(tagd.name)">{{tagd.name}}</el-tag>
        </div>
      </el-card>
    </div>
    <div class="brolist">
      <el-card shadow="always">
        <div style="padding-bottom:20px;"><i class="el-icon-reading"></i> 浏览排行</div>
        <ul style="list-style: none;padding-inline-start: 0px;">
          <li v-for="(bros,key) in brolist" :key="key">
            <span style="padding-right:20px;">{{key+1}}.</span>
            <a @click="$router.push(route_url+bros.id)" style="cursor: pointer;">{{bros.title}}</a><span class="li_span">{{bros.read_num}}</span>
          </li>
        </ul>
      </el-card>
    </div>
    <div class="timelist">
      <el-card shadow="always">
        <div style="padding-bottom:20px;"><i class="el-icon-suitcase"></i > 归档</div>
        <ul style="list-style: none;">
          <li v-for="tims in time_list" :key="tims.index" style="padding-left:20px;"><a>{{tims.name}}</a><span class="li_span" style="padding-right:50px;">{{tims.num}}</span></li>
        </ul>
      </el-card>
    </div>
</div>
</template>
<script>
export default {
  name: 'Sidebar',
  props: {
    tag_list: {
      type: Array
    },
    brolist: {
      type: Array
    },
    time_list: {
      type: Array
    },
    page_type: {
      type: Number
    },
    route_url: {
      type: String
    }
  },
  data () {
      return {
        url1: 'https://github.com/wjcid',
        url2: 'https://weibo.com/5949377623/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1',
        circleUrl: require('@/assets/img/baichi.jpg'),
        circleUrl1: require('@/assets/img/github.jpg'),
        circleUrl2: require('@/assets/img/weibo.jpg')
      }
  },
  methods: {
    tagArtList(tagd){
      this.$axios.post(this.$consts.BASE_URL+'tagArtList', {
          type:this.page_type,
          tagname:tagd
        }).then(res=>{
          this.$emit('event1',res.data.data.artList)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->`
<style scoped lang="scss">
li {
  text-align:left;
  font-size:14px;
  padding-bottom:10px;
}
.li_span {
  float:right;
  padding-right:10px;
}
.personal {
  padding-bottom: 20px;
}
.tag {
  padding-bottom: 20px;
}
.brolist {
  padding-bottom: 20px;
}
.timelist {
  padding-bottom: 20px;
}
</style>