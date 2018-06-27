<template>
    <div id="header_contain">
        <el-row>
            <el-col :span="8">
                <ul class="list_left">
                    <router-link to="/main/home"><li class="list_active">首页</li></router-link>
                    <router-link to="/main/introduce"><li class="list_active">产品与服务</li></router-link>
                    <router-link to="/main/about"><li class="list_active">关于我们</li></router-link>
                </ul>
            </el-col>
            <el-col :span="8">
                <div class="logo_img">
                    <img src="../../assets/img/logo.png" alt="">
                    <p>专业的汽车不良资产处置专家</p>
                </div>
            </el-col>
            <el-col :span="8" class="right_ul_location">
                <ul>
                    <li v-on:mouseenter="weixin = true" v-on:mouseleave="weixin = false">微信公众号</li>
                    <li v-on:mouseenter="upLoadApp = true" v-on:mouseleave="upLoadApp = false">下载APP</li>
                    <li class="officer_css"><a href="http://loaner.chebutou.com.cn/src/modules/login/login.html">债权方登录</a></li>
                    <li class="officer_css"><a href="http://loaner.chebutou.com.cn/src/modules/register/register.html">债权方注册</a></li>
                </ul>
                <div class="wechat_img hover_css_common" v-if="weixin">
                    <img src="../../assets/img/sixth_wechat.png" alt="微信公众号">
                </div>
                <div class="upload_img hover_css_common" v-if="upLoadApp">
                    <img src="../../assets/img/sixth_appdownload.png" alt="微信公众号">
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'Header',
    data(){
        return{
            weixin: false,
            upLoadApp: false
        }
    }
}
</script>
<style>
#header_contain {
    width:100%;
    min-width:1200px;
    height:64px;
    background:rgba(0,0,0,1);
    box-shadow:0px 6px 12px 0px rgba(112,70,0,0.21);
    position:fixed;
    top:0;
    left:0;
    z-index:999
}
#header_contain .el-row .el-col:first-child{
    text-align: right;
    text-align: -webkit-right;
    text-align: -o-right;
    text-align: -ms-right;
    text-align: -moz-right;
}
#header_contain .el-row .el-col:nth-child(2){
    text-align: center;
    text-align: -webkit-center;
    text-align: -moz-center;
    text-align: -ms-center;
    text-align: -o-center;
}
#header_contain .logo_img{
    width:161px;
    padding:13px 0;
    margin:0 auto;
}
#header_contain .logo_img img{
    width:161px;
    height:22px;
}
#header_contain .logo_img p{
    font-size:12px;
    color:#fff;
}
#header_contain ul{
    height:64px;
}
#header_contain ul.list_left{
    width:236px;
    float:right;
}
#header_contain .right_ul_location{
    position: relative;
}
#header_contain ul li{
    float:left;
    color:rgba(255,255,255,1);
    padding:20px 0;
    margin:0 10px;
    cursor: pointer;
}
#header_contain ul a.router-link-active li.list_active{
    color:rgba(255,127,59,1);
    border-bottom:2px solid rgba(255,127,59,1);
}
#header_contain ul li.officer_css{
    height:24px;
    line-height: 22px;
    border-radius:1px;
    border:1px solid rgba(255,127,59,1);
    font-size:14px;
    padding:0 6px;
    margin:20px 10px;
}
.hover_css_common{
    width:130px;
    height:130px;
    background:rgba(255,255,255,1);
    box-shadow:0px 4px 8px 0px rgba(0,0,0,0.3);
    padding:7px;
    position:absolute;
    top:60px;
}
.wechat_img{
    left:-18px;
}
.upload_img{
    left:65px;
}
.hover_css_common:before{
    position:absolute;
    border-left:9px solid transparent;
    border-right:9px solid transparent;
    border-bottom:9px solid rgba(255,255,255,1);
    content:" ";
    display:block;
    width:0;
    height:0;
    left:43%;
    top:-8px;
}
</style>
