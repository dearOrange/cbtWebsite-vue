<template>
    <div id="footer_contain">
        <ul>
            <li>
                <h3>关于我们</h3>
                <p class="footer_one">杭州车捕头信息科技有限公司创建于互联网创新之城杭州，是一家依托大数据的汽车相关不良资产处置综合服务平台，让找车变得简单，致力于打造中国最大的汽车不良资产处置平台。</p>
            </li>
            <li>
                <h3>加入我们</h3>
                <p class="contact_phone">联系电话：0571-87001678</p>
                <p>
                    <span class="bussiness_talk">公司地址：</span>
                    <span class="span_address">杭州市拱墅区石祥路688号运河汽车互联网产业园</span>
                </p>
            </li>
            <li>
                <h3>微信平台</h3>
                <p><img src="../../assets/img/sixth_wechat.png" alt="微信平台"></p>
            </li>
            <li>
                <h3>手机APP</h3>
                <p><img src="../../assets/img/sixth_appdownload.png" alt="手机APP"></p>
            </li>
        </ul>
        <div class="bussiness_mark">Copyright © 2016-2017 chebutou.com.cn 版权所有 浙ICP备17001441号-1</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
#footer_contain{
    width:100%;
    height:228px;
    background:rgba(1,2,24,1);
    opacity:0.8;
    margin-top:58px;
    color:#fff;
}
#footer_contain ul{
    width:1050px;
    overflow: hidden;
    margin:0 auto;
}
#footer_contain ul li{
    float: left;
    margin:20px 42px 0;
}
#footer_contain ul li h3{
    width:80px;
    height:30px;
    font-size:20px;
    font-family:PingFangSC-Medium;
    line-height:28px;
    border-bottom:2px solid rgba(255,127,59,1);
    margin:0 auto;
}
.footer_one{
    width:240px;
    text-align: left;
    text-align: -webkit-left;
    text-align: -moz-left;
    text-align: -ms-left;
    text-align: -o-left;
}
#footer_contain ul li p{
    margin:20px 0 0;
}
#footer_contain ul li p.contact_phone{
    width:238px;
    text-align: left;
    text-align: -webkit-left;
    text-align: -moz-left;
    text-align: -ms-left;
    text-align: -o-left;
}
#footer_contain ul li span.bussiness_talk{
    float:left;
    margin-bottom:10px;
}
#footer_contain ul li span.span_address{
    width:166px;
    float:left;
    text-align: left;
    text-align: -webkit-left;
    text-align: -moz-left;
    text-align: -ms-left;
    text-align: -o-left;
}
#footer_contain .bussiness_mark{
    width:500px;
    height:22px;
    font-size:14px;
    font-family:PingFangSC-Regular;
    color:rgba(255,255,255,1);
    line-height:22px;
    margin:10px auto;
}

</style>
