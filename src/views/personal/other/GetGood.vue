<template>
      <div id="container">
        <nav-bar class="nav-bar-container">
            <div slot="left" class="top-left-return" @click="backClick"><img  id="nav-return" src="~assets/imgs/common/fanhui.png" alt=""></div>
            <span slot="center">点赞详情</span>
        </nav-bar>
        <div class="flex-center getgood-container">
            <img class="no-like" src="~assets/imgs/personal/no_like.png" alt="没有">
            <span class="nothing-here">Nothing Here</span>
            <span class="text">给你点赞的同学都会展示在这里,上榜用户会</span>
            <span class="text">增加点赞几率,快去努力学习吧~</span>
        </div>
    </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'
export default {
    name:'GetGood',
    components:{
        NavBar
    },
    methods:{
        backClick(){
            this.$router.back()
           
        }
    }
}
</script>

<style scoped>
.getgood-container{
    margin-top: 170px;
}

.nothing-here{
    font-size: 20px;
    font-weight: 900;
}
.text{
    font-weight: 400 ;
    margin-top:15px ;
    font-size: 16px;
}
.no-like{
    width: 130px;
}
</style>