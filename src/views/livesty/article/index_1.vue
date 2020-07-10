<template>
<div>
    <Header />
    <div class="binner">
      <div class="bin_div">
        <div class="bin_title">My Blog 计划</div>
        <div class="bin_msg"></div>
      </div>
    </div>
    <CanvasBg />
    <div class="con_main" id="con_main">
        <el-card shadow="always">
            <div class="content">
              My Blog 计划
              <div style="text-align:center;font-size:20px;">准备中----- <br>
                <el-image :src="srcz" lazy></el-image>
              </div>
              
            </div>
            <el-row :gutter="10">
              <el-col :span="12">上一篇：无</el-col>
              <el-col :span="12">下一篇：无</el-col>
            </el-row>
        </el-card>
    </div>
    <Footer />
</div>
</template>

<script>
export default {
data () {
    return {
      srcz: require('@/assets/img/404.jpg')
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
.el-image {
  height: 200px;
  width: 100px;
}
.el-row {
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.el-col {
  background:linear-gradient(to top, rgb(255,255,255) 5%, rgb(110,215,255) 70%);
}
</style>