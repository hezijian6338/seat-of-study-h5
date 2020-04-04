<template>
      <div id="container">
        <nav-bar class="nav-bar-container">
            <div slot="left" class="top-left-return" @click="backClick"><img  id="nav-return"  src="~assets/imgs/common/fanhui.png" alt=""></div>
            <span slot="center">最近来访</span>
        </nav-bar>
        <div class="flex-center getgood-container">
            <img  class="no-visit" src="~assets/imgs/personal/no_visit.png" alt="没有">
            <span class="nothing-here">Nothing Here</span>
            <span class="text">所有来访过的同学都会展示在这里~</span>
            
        </div>
    </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'
export default {
    name:'Visted',
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
    margin-top: 20px;
}
.text{
    font-weight: 400 ;
    margin-top:15px ;
    font-size: 16px;
}
.no-visit{
    width: 280px;
}
</style>