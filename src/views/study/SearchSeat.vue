<template>
    <div id="container">
        <nav-bar class="nav-bar-container">
            <div slot="left" class="top-left-return" @click="backClick"><img src="~assets/imgs/common/fanhui.png" alt=""></div>
            <span slot="center">不占座</span>
        </nav-bar>
        <div class="flex-center tongzhi-container">
            <img src="~assets/imgs/study/no_seat.png" alt="没有">
            <span>Nothing Here</span>
        </div>
    </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'

export default {
    name:'SearchSeat',
    components:{
        NavBar
    },
    methods:{
        backClick(){
            this.$router.back()
            this.$store.commit('changeShow')
        }
    }
}
</script>

<style scoped>
.tongzhi-container{
    margin-top: 170px;
}
.tongzhi-container span{
    font-size: 20px;
    font-weight: 900;
}
.nav-bar-container{
    position: relative;
}
.top-left-return{
 position: absolute;
    width: 30px;
    height: 30px;
    left: 10px;
    top: 20px;
    /* padding-left: 10px; */
}
.top-left-return img{
   width: 100%;
   height: 100%;
}

</style>