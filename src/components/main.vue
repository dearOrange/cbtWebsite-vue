<template>
    <div id="main_contain">
        <Header/>
        <section>
            <router-view/>
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
</style>
