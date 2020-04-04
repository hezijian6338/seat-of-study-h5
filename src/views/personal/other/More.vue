<template>
      <div id="container">
        <nav-bar class="nav-bar-container">
            <div slot="left" class="top-left-return" @click="backClick"><img  id="nav-return" src="~assets/imgs/common/fanhui.png" alt=""></div>
            <span slot="center">更多</span>
        </nav-bar>
        <div class="flex-center content">
            <div v-for="item in obj" :key="item.title" class="w">
                <img :src="item.imgUrl" alt="" class="imgUrl">
                <div  class="div-border">
                    <span class="name">{{item.title}}</span>
                    <img id="r_arrow" src="~assets/imgs/common/r_arrow.png" alt="">
                </div>
            </div>
            <span class="banben text">版本号 6.16.11</span>
        </div>
    </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'
export default {
    name:'More',
    components:{
        NavBar
    },
    data(){
        return{
            obj:[{
                imgUrl:require('assets/imgs/personal/hongbao.png'),
                title:'我的红包'
            },
            {
                imgUrl:require('assets/imgs/personal/geren.png'),
                title:'个人资料'
            },
            {
                imgUrl:require('assets/imgs/personal/wenti.png'),
                title:'常见问题'
            },
            {
                imgUrl:require('assets/imgs/personal/shiming.png'),
                title:'榜单实名'
            },
            ]

            
        }
    },
    methods:{
        backClick(){
            this.$router.back()
            
        }
    }
}
</script>

<style scoped>
.w{
    display: flex;
    margin-top: 10px;
    align-items: center;
}

.content{
    padding-top: 30px;
}

#r_arrow{
    width: 10px;
    height: 15px;
}
.div-border{
    width: 370px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding-left: 10px;
    padding-bottom: 20px;
    border-bottom: solid 1px #eee;
    font-size: 18px;
    font-weight: 500;
}
.imgUrl{
    margin-bottom: 20px;
}
.banben{
    margin-top: 350px;
    font-size: 16px;
}
</style>