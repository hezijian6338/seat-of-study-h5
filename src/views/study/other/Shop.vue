<template>
    <div id="container">
        <nav-bar class="nav-bar-container">
            <div slot="left" class="top-left-return" @click="backClick"><img  id="nav-return" src="~assets/imgs/common/fanhui.png" alt=""></div>
            <span slot="center">时间小店</span>
        </nav-bar>
        <div class="flex-center">
            <div class="top-item w">
                <img class="points-big" src="~assets/imgs/study/points_big.png" alt="大豆豆">
                <div>
                    <span class="timekeli">时间颗粒</span>
                    <img class="help" src="~assets/imgs/study/help.png" alt="帮助">
                    <div class="timecount">
                        {{this.$store.state.timecount}}
                    </div>
                </div>
                <div class="exchange" @click="gotoExchange">我的兑换</div>
            </div>
        </div>
        <div class="flex-center bgc">
            <div class="newperson">
                    <img class="decorate" src="~assets/imgs/study/decorate_j.png" alt="">
                    <span class="text1">新人专区</span>
                    <img class="decorate" src="~assets/imgs/study/decorate_j.png" alt="">
             </div>
             <div class="bottom-item w">   
                <shop-item v-for="item in 4" :key="item"></shop-item>
            </div>
            <div class="newperson">
                    <img class="decorate" src="~assets/imgs/study/decorate_j.png" alt="">
                    <span class="text1">学霸专区</span>
                    <img class="decorate" src="~assets/imgs/study/decorate_j.png" alt="">
             </div>
              <div class="bottom-item w">   
                <shop-item v-for="item in 2" :key="item"></shop-item>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'
import ShopItem from 'components/content/shopitem/ShopItem'
export default {
    name:'Shop',
    components:{
        NavBar,
        ShopItem
    },
    methods:{
        backClick(){
            this.$router.back()
        },
        gotoExchange(){
            this.$router.push('/exchange')
        }
    }
}
</script>

<style scoped>
.top-item{
    padding: 20px;
    display: flex;
    align-items: center;
    position: relative;
}
.points-big{
    width: 40px;
    height: 43px;
    margin-right: 10px;
}
.timekeli{
    color:#a3a3a4;
    font-size: 18px;
    padding-right:5px ;
}
.help{
    width: 22px;
    vertical-align: bottom;
}
.timecount{
    font-size: 25px;
    margin-top: 4px;
}
.exchange{
    width: 110px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    background-color: #eee;
    text-align: center;
    border-radius: 40px;
    position: absolute;
    right: 20px;
}

.bottom-item{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

}

.text1{
    font-size: 20px;
    padding: 0 5px;
}
.decorate{
    width: 23px;
}
.newperson{
    padding: 20px;
}
.bgc{
    background-color: #f9fafb;
}
</style>