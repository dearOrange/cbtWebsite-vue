<template>
    <div id="introduce_contain">
        <div class="introduce_contain_header search_contain">
            <p class="page_title">产品与服务</p>
            <p class="page_lines"></p>
            <p class="page_description">智能领航，卓越科技</p>
        </div>
        <div class="introduce_contain_second second_contain_list">
            <ul>
                <li class="first_li_list">
                    <h3>捕车邦</h3>
                    <p class="second_lines"></p>
                    <p class="second_description">我公司独立开发的移动智能找车应用，旨在解决汽车不良资产的寻回问题。采用互联网+线人的综合找车方式，通过大数据追踪探查，迅速定位，及时找到车辆，协助债权方挽回损失。</p>
                </li>
                <li class="second_li_list">
                    <img class="img_first" src="../assets/img/1-1.png" alt="智能追踪">
                    <img class="img_second" src="../assets/img/1-2.png" alt="雷达定位">
                    <img class="img_third" src="../assets/img/1-3.png" alt="快速匹配">
                    <img class="img_fourth" src="../assets/img/1-4.png" alt="一键发布">
                    <img class="img_fifth" src="../assets/img/Product_phnoe.png" alt="">
                </li>
            </ul>
        </div>
        <div class="introduce_contain_third second_contain_list">
            <ul>
                <li class="second_li_list second_li_change">
                    <img class="img_first_two" src="../assets/img/2-1.png" alt="智能追踪">
                    <img class="img_second_two" src="../assets/img/2-2.png" alt="雷达定位">
                    <img class="img_third_two" src="../assets/img/2-3.png" alt="快速匹配">
                    <img class="img_fifth_two" src="../assets/img/Productsandservices_second.png" alt="">
                    <img class="img_fourth_two" src="../assets/img/2-4.png" alt="一键发布">
                </li>
                <li class="first_li_list">
                    <h3>债权方管理系统</h3>
                    <p class="second_lines second_lines_change"></p>
                    <p class="second_description">专业的债权方移动端与PC端管理平台，任务一键发布，定向监督，增加催派功能，使找车轻便快捷，全程掌控。</p>
                </li>
            </ul>
        </div>
        <div class="introduce_contain_fourth second_contain_list">
            <ul>
                <li class="first_li_list">
                    <h3>运营平台</h3>
                    <p class="second_lines third_lines_change"></p>
                    <p class="second_description">公司内部管理系统，数据储存、接收、反馈一体式管理平台，流水线工作流程，每个任务专人跟踪，实时反馈，与线人面对面沟通，保障找车任务顺利进行。</p>
                </li>
                <li class="second_li_list second_li_change">
                    <img class="img_first_third" src="../assets/img/3-1.png" alt="智能追踪">
                    <img class="img_second_third" src="../assets/img/3-2.png" alt="雷达定位">
                    <img class="img_third_third" src="../assets/img/3-3.png" alt="快速匹配">
                    <img class="img_fifth_third" src="../assets/img/Productsandservices_third.png" alt="">
                    <img class="img_fourth_third" src="../assets/img/3-4.png" alt="一键发布">
                </li>
            </ul>
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
