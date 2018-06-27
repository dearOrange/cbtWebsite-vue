<template>
    <div id="introduce_contain">
        <div class="about_contain_header search_contain">
            <p class="page_title">关于我们</p>
            <p class="page_lines"></p>
            <p class="page_description">着眼未来，立足现在</p>
        </div>
        <div class="about_contain_second second_contain_list">
            <ul>
                <li class="first_li_list">
                    <h3>公司简介</h3>
                    <p class="second_lines third_lines_change"></p>
                    <p class="second_description">杭州车捕头信息科技有限公司创建于互联网创新之城杭州，位于运河汽车互联网产业园，是一家依托大数据的汽车相关不良资产处置综合服务平台，让找车变得简单，致力于打造中国最大的汽车不良资产处置平台。</p>
                </li>
                <li class="second_li_list">
                    <img src="../assets/img/aboutus_company.png" alt="">
                </li>
            </ul>
        </div>
        <div class="about_contain_third second_contain_list">
            <ul>
                <li class="second_li_list second_li_change">
                    <img src="../assets/img/aboutus_layout.png" alt="">
                </li>
                <li class="first_li_list">
                    <h3>业务范围</h3>
                    <p class="second_lines third_lines_change"></p>
                    <p class="second_description">我公司主要从事汽车不良资产的查找、清收、处置工作，凭借开放共享式平台和多样化的处置方式，以及衍生的系列服务，推动传统汽车不良资产产业升级，实现模式突破，提升效率、降低成本、规范市场、整合资源、解决信息不对称。</p>
                </li>
            </ul>
        </div>
        <div class="about_contain_environment search_contain">
            <p class="page_title">工作环境</p>
            <p class="page_lines"></p>
            <p class="page_description">环境优美宜人，工作氛围浓厚。</p>
            <img src="../assets/img/aboutus_workplace.png" alt="">
        </div>
        <div class="about_contain_nowadays search_contain">
            <p class="page_title">所在位置</p>
            <p class="page_lines"></p>
            <p class="page_description">欢迎意向合作伙伴前来考察洽谈。</p>
            <img src="../assets/img/aboutus_location.png" alt="">
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from './common/footer.vue'
export default {
    name:'Introduce',
    components:{
        Footer
    }
}
</script>
<style>
@import url(../assets/css/about.css)
</style>
