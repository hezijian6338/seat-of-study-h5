<template>
    <div id="container">
        <nav-bar class="nav-bar-container">
            <div slot="left" class="top-left-return" @click="backClick"><img id="nav-return" src="~assets/imgs/common/fanhui.png" alt=""></div>
            <span slot="center">时间瓶</span>
        </nav-bar>
        <div class="flex-center">
            <div class="w">
                <div class="top-left">
                    <img class="touxiang" src="~assets/imgs/common/default_avatar.png" alt="头像">
                    <span class="timecount">{{this.$store.state.timecount}}</span>
                    <div class="exchange" @click="gotoShop">兑换</div>
                </div>
                <div class="top-right">
                    <img src="~assets/imgs/study/steal.png" alt="偷颗粒">
                    <img src="~assets/imgs/study/gonglue.png" alt="攻略">
                    <img src="~assets/imgs/study/record.png" alt="记录">
                </div>
            </div>
            <img class="pop" src="~assets/imgs/study/pop.gif" alt="上升气泡">
            <img class="bottle2" src="~assets/imgs/study/bottle2.png" alt="瓶子2">
            <img class="koi_bottle" src="~assets/imgs/study/koi_bottle.png" alt="瓶子2">
            <img class="left_arrow" src="~assets/imgs/study/left_arrow.png" alt="瓶子2">
            <span class="percent">{{this.$store.state.timecount/10000*100+'%'}}</span>
            <span class="text text1">{{this.$store.state.timecount+'/'+10000}}</span>
            <span class="text text2">这是你的第一个瓶子</span>
        </div>
        <div class="bottom-container flex-center">
            <span class="w text3">最新互动</span>
            <span class="text text4">所有来访过你的同学都会记录在这里</span>
        </div>
    </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'

export default {
    name:'TimeBottle',
    components:{
        NavBar
    },
    methods:{
        backClick(){
            this.$router.back()  
        },
        gotoShop(){
            this.$router.push('/shop')
        }
    }
}
</script>

<style scoped>
.top-left{
    width: 160px;
    height: 60px;
    background-color: #f7f7f7;
    border-radius: 30px;
    display: flex;
    align-items: center;
}
.flex-center{
    padding-top:20px
}
.touxiang{
    height: 60px;
}
.timecount{
    font-size: 16px;
     font-weight: 600;
}
.exchange{
    width: 55px;
    height: 30px;
    background-color: #ffd63e;
    text-align: center;
    line-height: 30px;
    font-size: 15px;
    border-radius:15px;
}
.top-right{
    position: relative;
    left:370px;
    top:-58px;
}
.top-right img{
    display: block;
    width: 55px;
    margin-bottom: 10px;
}
.pop{
    position: absolute;
    top:200px;
    width: 250px;

}
.bottle2{
    margin-top:85px ;
    width: 160px;
}
.koi_bottle{
    position: absolute;
    top:500px;
    left: 0px;
    width: 300px;
}
.left_arrow{
    position: absolute;
    top:590px;
    left: 300px;
    width:8px;
}
.percent{
    position: absolute;
    top:575px;
    left: 315px;
    font-size: 16px;
    font-weight: 600; 
}
.text1{
    position: absolute;
    top:595px;
    left:315px;
}
.text2{
    padding-top:10px;
}

.bottom-container{
    background-color: #fafafa;
    margin-top: 30px;
}
.text3{
    font-size: 18px;
}
.text4{
    margin-top:30px;
}
</style>