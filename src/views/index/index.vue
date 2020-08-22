<template>
<div>
    <Header />
    <div class="main">
        <div class="title">
            <div class="welcome">Welcome My Blog</div>
            <div class="msg">オレは海贼王になる男だ（我是要成为海贼王的男人）</div>
        </div>
        <div class="down-icons">
            <i class="el-icon-arrow-down"></i>
        </div>
    </div>
    <div class="con">
        <div class="con_title_div">
            <div class="con_title">一起去冒险吧</div>
            <div>一緒に冒険に行こう、出発</div>
        </div>
        <el-row :gutter="20">
            <el-col :lg="14" :xs="24">
                <el-card shadow="always" :body-style="{ padding: '0px' }">
                    <div style="width:50%;float:left;overflow: hidden;"><el-image class="img1" :src="src1" lazy></el-image></div>
                    <div class="card-div" @click="$router.push('/develop/list')">
                        <div class="card-title">技术总结</div>
                        <div class="card-msg">PHP/数据库/Linux/Vue/go  等相关知识点，开发中遇到的问题总结。</div>
                        <div class="btn" @click="$router.push('/develop/list')" v-if='$store.state.width<768?false:true'>
                            <span class="noselect">出发浏览 <i class="el-icon-d-arrow-right"></i></span>
                            <div class="vertical"></div>
                            <div class="horizontal"></div>
                        </div>
                    </div>
                </el-card>
                <el-card shadow="always" :body-style="{ padding: '0px' }">
                    <div style="width:50%;float:right;overflow: hidden;"><el-image class="img2" :src="src2" lazy></el-image></div>
                    <div class="card-div" @click="$router.push('/read/list')">
                        <div class="card-title">书籍分享</div>
                        <div class="card-msg">一本好书需要慢慢读、细细品味。书籍推荐，分享感悟。</div>
                        <div class="btn" @click="$router.push('/read/list')" v-if='$store.state.width<768?false:true'>
                            <span class="noselect">出发浏览 <i class="el-icon-d-arrow-right"></i></span>
                            <div class="vertical"></div>
                            <div class="horizontal"></div>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :lg="10" :xs="24">
                <el-card shadow="always" class="oncard" :body-style="{ padding: '0px' }">
                     <div style="width:100%;overflow: hidden;"><el-image class="img3" :src="src3" lazy></el-image></div>
                     <div class="card-div-3" @click="$router.push('/livesty/list')">
                        <div class="card-title-3">生活日志</div>
                        <div class="card-msg-3">想记录的时候记录一下，有感慨的时候抒发一下。</div>
                        <div class="btn btn-3" @click="$router.push('/livesty/list')" v-if='$store.state.width<768?false:true'>
                            <span class="noselect">出发浏览 <i class="el-icon-d-arrow-right"></i></span>
                            <div class="vertical"></div>
                            <div class="horizontal"></div>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
    <Footer />
</div>
</template>

<script>
export default {
data() {
    return {
    src1: require('@/assets/img/4.jpg'),
    src2: require('@/assets/img/5.jpg'),
    src3: require('@/assets/img/qiaoba.jpg')
    }
}
}
</script>
<!-- 网格按钮样式特效 -->
<style src="./css/style.css"></style>
<!-- background:linear-gradient(to top, rgb(255,255,255) 55%, rgb(110,215,255) 80%, rgb(75,100,255) 130%); -->
<!-- Add "scoped" attribute to limit CSS to this component only -->`
<style scoped lang="scss">
.con_title_div {
    padding-bottom: 100px;
}
.con_title {
    font-size: 25px;
}
.card-div {
    width: 50%;
    height: 240px;
    float: right;
}
.card-title {
    padding: 30px 0px;
    font-size: 20px;
}
.card-msg {
    padding: 0px 20px;
    text-align: left;
}
.el-image {
    width: 100%;
    height: 240px;
    transition: all 0.6s;
}
.img1 {
    float: left;
}
.img2 {
    float: right;
}
.img3 {
    width: 100%;
    height: 300px;
}
.btn-3 {
    margin: 40px 40px 20px 0px;
}
.card-title-3 {
    padding: 20px 0px;
    font-size: 20px;
}
.card-msg-3 {
    padding: 0px 20px;
    text-align: left;
}
.el-image:hover {
    transform: scale(1.2); /* 放大1.2倍 */
}
.main {
    width: 100%;
    height: 100vh;
    background: url(http://qfe7tmya7.hb-bkt.clouddn.com/2.jpg);
    background-size: 100% 100%;
    background-attachment: fixed;
}
.con {
    padding: 100px 0px;
    margin: 0 auto;
    width: 1200px;
    height: 700px;
}
.el-card {
    margin-bottom: 20px;
    height: 240px;
    background: white;
    overflow: hidden;
}
.oncard {
    height: 500px;
}
.title {
    position: absolute;
    top: 50%;
    width: 100%;
    color: white;
}
.welcome {
    font-size: 2rem;
    padding-bottom: 10px;
}
.msg {
    margin: 0 auto;
    width: 25em;
    overflow: hidden;
    white-space: nowrap; 
    border-right: 0.1em solid; 
    animation: typing 9s steps(16) infinite, caret 1s steps(10) infinite;
}
@keyframes typing { 
    from { width: 0; } 
} 
@keyframes caret { 
    50% { border-color: transparent; } 
}
.down-icons {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 42px;
    text-align: center;
    font-size: 30px;
}
.el-icon-arrow-down {
    position: absolute;
    color: white;
    animation: icon-up-dowm 1.5s infinite;
}
.el-icon-d-arrow-right {
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
@keyframes icon-up-dowm {  
    0% {  
        transform: translate(0px, 0px);  
    }  
    50% {  
        transform: translate(0px, -20px);  
    }  
    100% {  
        transform: translate(0px, 0px);  
    }  
}
@media screen and (max-width:768px) {
    .main {
        width: 100%;
        height: 100vh;
        background: url(http://qfe7tmya7.hb-bkt.clouddn.com/mob_bg_1.jpg);
        background-size:100% 100%;
    }
    .con {
        padding: 50px 0px;
        margin: 0 auto;
        width: 95%;
        height: 780px;
    }
    .el-card {
        margin-bottom: 20px;
        height: 160px;
        background: white;
        overflow: hidden;
    }
    .con_title_div {
        padding-bottom: 50px;
    }
    .card-div {
        width: 50%;
        height: 160px;
        float: right;
    }
    .card-title {
        padding: 15px 0px;
        font-size: 18px;
    }
    .card-msg {
        padding: 0px 10px;
        text-align: left;
    }
    .el-image {
        width: 100%;
        height: 160px;
        transition: all 0.6s;
    }
    .oncard {
        height: 330px;
    }
    .card-title-3 {
        padding: 15px 0px;
        font-size: 18px;
    }
    .card-msg-3 {
        padding: 0px 10px;
        text-align: left;
    }
    .img3 {
        width: 100%;
        height: 220px;
    }
}
</style>