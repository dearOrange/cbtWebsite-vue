<template>
    <div id="main_contain">
        <Header :class="backClass != 1 && backClass != 6 ? 'changeClass' : ''" />
        <section>
            <router-view @getindex="getindex"/>
        </section>
    </div>
</template>
<script>
import Header from './common/header.vue'
// import Footer from './common/footer.vue'
export default {
    name: 'Main',
    components: {
      Header,
    //   Footer  
    },
    data(){
        return {
            backClass: 1
        }
    },
    methods:{
        getindex(index){
            this.backClass = index;
        }
    }
}
</script>
<style>
section{
    text-align: center;
    text-align: -webkit-center;
    text-align: -moz-center;
    text-align: -ms-center;
    text-align: -o-center;
}
.changeClass{
    background-color: #fff !important;
}
.changeClass .logo_img p{
    color:#000 !important;
}
.changeClass ul li{
    color:#000 !important;
}
.changeClass ul li a{
    color:#000 !important;
}
</style>
