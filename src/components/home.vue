<template>
<!-- banner部分 -->
<div id="home_contain" class="home_content">
    <div id="banner_contain" class="common_contain">
        <p class="banner_top"></p>
        <div class="banner_title">
            <span>车</span>
            <span class="pseudo_class"></span>
            <span>捕</span>
            <span class="pseudo_class"></span>
            <span>头</span>
        </div>
        <p class="banner_one">专业的汽车不良资产处置专家</p>
        <p class="banner_two">Professional auto assets disposal expert</p>
        <p class="banner_three">免费发布·免费咨询·免费对接·全程协助</p>
        <p class="banner_bottom"></p>
        <p class="banner_bottomBg"></p>
        <div class="ulJump_btn">
            <p></p>
            <ul>
                <li :class="classNum === 1 ? 'jump_active' : classNum === 6 ?'':'nextActive'" @click="goAnchor('#banner_contain', 1)"><a href="javascript:void(0)">1</a><span></span></li>
                <li :class="classNum === 2 ? 'jump_active' : classNum === 1 || classNum === 6 ?'':'nextActive'" @click="goAnchor('#second_section', 2)"><a href="javascript:void(0)">2</a><span></span></li>
                <li :class="classNum === 3 ? 'jump_active' : classNum === 1 || classNum === 6 ?'':'nextActive'" @click="goAnchor('#third_section', 3)"><a href="javascript:void(0)">3</a><span></span></li>
                <li :class="classNum === 4 ? 'jump_active' : classNum === 1 || classNum === 6 ?'':'nextActive'" @click="goAnchor('#fourth_section', 4)"><a href="javascript:void(0)">4</a><span></span></li>
                <li :class="classNum === 5 ? 'jump_active' : classNum === 1 || classNum === 6 ?'':'nextActive'" @click="goAnchor('#five_section', 5)"><a href="javascript:void(0)">5</a><span></span></li>
                <li :class="classNum === 6 ? 'jump_active' : classNum === 1 ?'':'nextActive'" @click="goAnchor('#sixth_section', 6)"><a href="javascript:void(0)">6</a><span></span></li>
            </ul>
            <p></p>
        </div>
    </div>

<!-- what we do -->
<transition name="slide-fade">
    <div id="second_section" class="common_contain">
        <p class="common_css todo_top"></p>
        <p class="what_title">我们是做什么的？</p>
        <div class="doing_title">
            <span class="pseudo_class"></span>
            <span class="span_contain">what we do?</span>
            <span class="pseudo_class"></span>
        </div>
        <p class="common_css todo_middle"></p>
        <p class="detail_content">杭州车捕头信息科技有限公司 </p>
        <p class="detail_content">依托大数据的汽车相关不良资产处置专家</p>
        <p class="detail_content">专业进行汽车不良资产的寻找、处置、咨询等工作</p>
        <p class="detail_content">让找车更简单，致力于打造中国最大的汽车不良资产处置平台</p>
        <p class="common_css todo_bottom"></p>
        <div class="option_content">
            <span class="option_support"></span>
            <span class="option_text">技术支持</span>
            <span class="option_support"></span>
        </div>
        <ul class="production_list">
            <li>
                <img src="../assets/img/second_first.png" alt="">
                <span>车辆迅速追踪</span>
                <span class="span_introtion">强大的线下团队</span>
                <span class="span_introtion">帮助您快速定位车辆</span>
            </li>
            <li>
                <img src="../assets/img/second_second.png" alt="">
                <span>网络大数据调查</span>
                <span class="span_introtion">互联网大数据查询</span>
                <span class="span_introtion">第一时间得到信息</span>
            </li>
            <li>
                <img src="../assets/img/second_third.png" alt="">
                <span>资料数据化支持</span>
                <span class="span_introtion">将资料数据化存储管理</span>
                <span class="span_introtion">方便日后追溯查看</span>
            </li>
            <li>
                <img src="../assets/img/second_fourth.png" alt="">
                <span>信息实时推送</span>
                <span class="span_introtion">车辆信息实时更新</span>
                <span class="span_introtion">让您随时掌握最新信息</span>
            </li>
        </ul>
    </div>
</transition>    
    <!-- third部分 -->
    <div id="third_section" class="common_contain">
        <p class="common_css todo_top"></p>
        <p class="what_title">我们的运营状况</p>
        <div class="doing_title">
            <span class="pseudo_class"></span>
            <span class="span_contain">Our operating conditions</span>
            <span class="pseudo_class"></span>
        </div>
        <p class="common_css todo_middle"></p>
        <p class="detail_content">兢兢业业，奋力拼搏，用汗水铸就每一个前进的脚印</p>
        <div class="third_number">
            <ul>
                <li>
                    <p>
                        {{total.totalTask}}
                        <span>+</span>
                    </p>
                    <img src="../assets/img/third_first.png" alt="">
                    <span class="third_task">寻车任务</span>
                </li>
                <li>
                    <p>
                        {{total.totalPrices}}
                        <span>万元+</span>
                    </p>
                    <img src="../assets/img/third_second.png" alt="">
                    <span class="third_task">处置金额</span>
                </li>
                <li>
                    <p>
                        {{total.totalDownstream}}
                        <span>+</span>
                    </p>
                    <img src="../assets/img/third_third.png" alt="">
                    <span class="third_task">现有捕头</span>
                </li>
                <li>
                    <p>
                        {{total.totalUpstream}}
                        <span>+</span>
                    </p>
                    <img src="../assets/img/third_fourth.png" alt="">
                    <span class="third_task">合作伙伴</span>
                </li>
            </ul>
        </div>
        <div class="ranking_list">
            <dl>
                <dt>
                    <span class="rank_img"></span>
                    <span>任务车辆全国分布</span>
                    <span class="rank_img"></span>
                </dt>
                <dd>
                    <img src="../assets/img/third_maps.png" alt="">
                </dd>
            </dl>
            <dl>
                <dt>
                    <span class="rank_img"></span>
                    <span>处置金额省份排行</span>
                    <span class="rank_img"></span>
                </dt>
                <dd>
                    <img src="../assets/img/third_amount.png" alt="">
                </dd>
            </dl>
        </div>
    </div>
    <!-- fourth部分 -->
    <div id="fourth_section" class="common_contain">
        <p class="common_css todo_top"></p>
        <p class="what_title">我们的产品</p>
        <div class="doing_title">
            <span class="pseudo_class"></span>
            <span class="span_contain">Our products</span>
            <span class="pseudo_class"></span>
        </div>
        <p class="common_css todo_middle"></p>
        <p class="detail_content">捕车邦</p>
        <p class="detail_content detail_content_css">专业的移动端找车应用，一体式智能化流程，让找车更轻松，更有效</p>
        <div class="produce_introduce">
            <div>
                <img src="../assets/img/fourth_phone.png" alt="">
            </div>
            <div>
               <dl>
                    <dd>
                        <img src="../assets/img/fourth_first.png" alt="">
                    </dd>
                    <dt>快速发布</dt>   
                </dl>
                <dl>
                    <dd>
                        <img src="../assets/img/fourth_second.png" alt="">
                    </dd>
                    <dt>任务跟踪</dt>   
                </dl>
                <dl>
                    <dd>
                        <img src="../assets/img/fourth_third.png" alt="">
                    </dd>
                    <dt>一键上传</dt>   
                </dl>
                <dl>
                    <dd>
                        <img src="../assets/img/fourth_fourth.png" alt="">
                    </dd>
                    <dt>快速匹配</dt>   
                </dl>
                <dl>
                    <dd>
                        <img src="../assets/img/fourth_fifith.png" alt="">
                    </dd>
                    <dt>地图搜索</dt>   
                </dl>
                <dl>
                    <dd>
                        <img src="../assets/img/fourth_sixth.png" alt="">
                    </dd>
                    <dt>定时推送</dt>   
                </dl> 
                <dl class="last_dl_list">
                    <dd class="dd_one">
                        <img src="../assets/img/fourth_iphone.png" alt="">
                    </dd>
                    <dt>
                        <img src="../assets/img/fourth_andriod.png" alt="">    
                    </dt>   
                </dl>
                <dl class="last_dl_list">
                    <dd class="dd_two">
                        <img src="http://test.hunter.chebutou.com.cn/hunterServer/content/showQRCode" alt="">
                    </dd>
                </dl>
            </div>
        </div>
    </div>
    <!-- five 部分 -->
    <div id="five_section" class="common_contain">
        <p class="common_css todo_top"></p>
        <p class="what_title">我们的产品怎么使用？</p>
        <div class="doing_title">
            <span class="pseudo_class"></span>
            <span class="span_contain">How do we use our products</span>
            <span class="pseudo_class"></span>
        </div>
        <p class="common_css todo_middle"></p>
        <p class="detail_content">直线性操作方式，简捷智能，提高工作效率</p>
        <ul class="production_list">
            <li>
                <img src="../assets/img/fifth_first.png" alt="">
                <span>注册</span>
                <p class="flow_header">手机号注册</p>
                <span class="flow_chart flow_total_branch"></span>
                <span class="flow_branch"></span>
                <div class="flow_branch_div">
                    <div class="left_flow_branch">
                        <p>债权方</p>
                        <span class="flow_chart"></span>
                        <p>上传资质</p>
                        <span class="flow_chart"></span>
                        <p>审核通过</p>
                        <span class="flow_chart"></span>
                        <p>注册成功</p>
                    </div>
                    <div class="right_flow_branch">
                        <p>线人</p>
                        <span class="flow_chart"></span>
                        <p>注册成功</p>
                        <span class="flow_chart"></span>
                        <p>完善资料</p>
                    </div>
                </div>
            </li>
            <li>
                <img src="../assets/img/fifth_second.png" alt="">
                <span>我是线人</span>
                <p class="flow_header">关注任务</p>
                <span class="flow_chart"></span>
                <p>接收信息推送</p>
                <span class="flow_chart"></span>
                <p>上传线索</p>
                <span class="flow_chart"></span>
                <p>领取奖励</p>
                <span class="flow_chart"></span>
                <p>后续</p>
            </li>
            <li>
                <img src="../assets/img/fifth_third.png" alt="">
                <span>我是债权方</span>
                <p class="flow_header">发布任务</p>
                <span class="flow_chart"></span>
                <p>跟踪任务</p>
                <span class="flow_chart"></span>
                <p>确认收车</p>
                <span class="flow_chart"></span>
                <p>完成与联系</p>
            </li>
        </ul>
        <div class="goRegister"><a href="http://loaner.chebutou.com.cn/src/modules/register/register.html">立即注册债权方</a></div>
    </div>
    <!-- sixth 部分 -->
    <div id="sixth_section" class="common_contain">
        <p class="common_css todo_top"></p>
        <p class="what_title">我们的合作伙伴</p>
        <div class="doing_title">
            <span class="pseudo_class"></span>
            <span class="span_contain">Cooperative partner</span>
            <span class="pseudo_class"></span>
        </div>
        <p class="common_css todo_middle"></p>
        <p class="detail_content">与多家公司建立合作关系，携手创建优质平台</p>
        <ul class="cooperate_bussiness">
            <li>
                <img src="../assets/img/sixth_1.png" alt="">
            </li>
            <li>
                <img src="../assets/img/sixth_2.png" alt="">
            </li>
            <li>
                <img src="../assets/img/sixth_3.png" alt="">
            </li>
            <li>
                <img src="../assets/img/sixth_4.png" alt="">
            </li>
            <li>
                <img src="../assets/img/sixth_5.png" alt="">
            </li>
            <li>
                <img src="../assets/img/sixth_6.png" alt="">
            </li>
            <li>
                <img src="../assets/img/sixth_7.png" alt="">
            </li>
            <li>
                <img src="../assets/img/sixth_8.png" alt="">
            </li>
            <li>
                <img src="../assets/img/sixth_9.png" alt="">
            </li>
        </ul>
        <Footer/>
    </div>
 </div>   
</template>
<script>
import axios from 'axios'
import Footer from './common/footer.vue'
export default {
    name:'Home',
    components:{
        Footer
    },
    data(){
        return{
            classNum: 1,
            total:{
                totalUpstream:0,
                totalPrices:0,
                totalDownstream:0,
                totalTask:0
            }
            
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            window.addEventListener('scroll', this.onScroll)
        });
        axios({
            method: 'get',
            url:'http://test.hunter.chebutou.com.cn/hunterServer/content/getWebsiteData',
            responseType:'json',
            headers: {
              'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        })
        .then(res=>{
            let data = res.data.data;
            this.total.totalUpstream = data.totalUpstream;
            this.total.totalPrices = data.totalPrices;
            this.total.totalDownstream = data.totalDownstream;
            this.total.totalTask = data.totalTask;
        })
    },
    methods: {
        goAnchor (selector,index) {
            this.classNum = index;
            let jump = this.$el.querySelector(selector);
            let total = jump.offsetTop-500;
            let distance = document.documentElement.scrollTop || document.body.scrollTop;
            // 平滑滚动，时长500ms，每10ms一跳，共50跳
            let step = total / 50
            if (total > distance) {
                smoothDown()
            } else {
                let newTotal = distance - total
                step = newTotal / 50
                smoothUp()
            }
            function smoothDown () {
                if (distance < total) {
                    distance += step
        　　　　　　 document.body.scrollTop = distance
                    document.documentElement.scrollTop = distance
                    setTimeout(smoothDown, 15)
                } else {
                    document.body.scrollTop = total
                    document.documentElement.scrollTop = total
                }
            }
            function smoothUp () {
                if (distance > total) {
                    distance -= step
        　　　　　　　document.body.scrollTop = distance
                    document.documentElement.scrollTop = distance
                    setTimeout(smoothUp, 15)
                } else {
                    document.body.scrollTop = total
                    document.documentElement.scrollTop = total
                }
            } 
        },
        onScroll () {
            let scrolled = document.documentElement.scrollTop || document.body.scrollTop
        　　　 // 586、1063分别为第二个和第三个锚点对应的距离
            if (scrolled >= 4400) {
                this.classNum = 6
            } else if (scrolled < 4400 && scrolled >= 3405) {
                this.classNum = 5
            } else if (scrolled < 3405 && scrolled >= 2451) {
                this.classNum = 4
            } else if (scrolled < 2451 && scrolled >= 1464) {
                this.classNum = 3
            } else if (scrolled < 1464 && scrolled >= 553) {
                this.classNum = 2
            } else {
                this.classNum = 1
            }
        }
    }

}
</script>
<style>
@import url(../assets/css/home.css)
</style>
