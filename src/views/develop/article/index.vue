<template>
<div>
    <Header />
    <div class="binner">
      <div class="bin_div">
        <div class="bin_title">阿里云搭建ss</div>
        <div class="bin_msg">勤思考，多总结</div>
      </div>
    </div>
    <CanvasBg />
    <div class="con_main" id="con_main">
        <el-card shadow="always">
            <div class="content">
            <h3>搭建环境</h3>
            <div style="line-height:30px;">阿里云服务器ECS（香港）系统：Debain</div>
            <div style="line-height:30px;">阿里云归国家监管，一不小心端口就被封了，尽量用的时候再开服务。或者换个梯子翻吧</div>
            <h3>1、安装服务端shadowsocks</h3>
            <pre v-highlight><code>
wget --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh
chmod +x shadowsocks-all.sh
./shadowsocks-all.sh 2>&1 | tee shadowsocks-all.log
                </code>
                </pre>

                <h3>2、配置shadowsocks</h3>
                <div style="line-height:30px;">上述命令执行后，会提示输入服务器IP、源码语言、密码、端口、及加密方式等。<br>
                （这里端口使用8989；源码选择的是python语言；加密方式选择aes-256-gcm；）<br>
                本地默认1080<br></div>

                <h3>3、设置防火墙端口开放</h3>
                    <div style="line-height:30px;">(1).ufw allow 8989   (2).ufw reload   (3).ufw status<br>
                    （登录阿里云安全组 配置开放 8989端口）<br></div>

                <h3>4、本地下载配置shadowsocks客户端</h3>（浏览器无法访问大陆站点 500错误时  360网络诊断一下）<br>

                <h3>服务端命令</h3>
                <div style="line-height:30px;">启动命令：ssserver -c /etc/shadowsocks-python/config.json -d start<br>
                关闭命令：ssserver -c /etc/shadowsocks-python/config.json -d stop<br>
                卸载方法： ./shadowsocks-all.sh uninstall<br>
                启动失败 检查端口是否可用问题  netstat -nlpt 查看一下<br></div>
                <br>

                <h3>遇到的两问题</h3>
                <div style="line-height:30px;">1、500 Internal Privoxy Error<br>
                Privoxy encountered an error while processing your request:<br>
                Could not load template file no-server-data or one of its included components.<br>
                Please contact your proxy administrator.<br>
                If you are the proxy administrator, please put the required file(s)in the (confdir)/templates directory.<br>
                The location of the (confdir) directory is specified in the main Privoxy config file. <br>
                (It's typically the Privoxy install directory).<br>
                通过360网络诊断解决<br>

                2、shadowsocks客户端日志监控（由于目标主机主动拒绝，连接失败）<br>
                    查看端口发现shadowsocks服务没启用（....笑......）<br>
                    service XXX start（启动失败）（....懵......）<br>
                用上述服务端启动命令成功 <br></div>
            </div>
            <div class="upload">
              <a href=""> 点击下载文档</a>  <div style="font-size:14px;color:red;">*我自己总结的word文档</div>
            </div>
            <el-row :gutter="10">
              <el-col :span="12">上一篇：MySQL优化方法总结（一）</el-col>
              <el-col :span="12">下一篇：vue生命周期</el-col>
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
</style>