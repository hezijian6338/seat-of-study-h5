<template>
      <div id="container">
        <nav-bar class="nav-bar-container">
            <div slot="left" class="top-left-return" @click="backClick"><img src="~assets/imgs/common/fanhui.png" alt=""></div>
            <span slot="center">加V认证</span>
        </nav-bar>
        <div class="flex-center">
            <div class="jiav"><img src="~assets/imgs/common/jiavrenzheng.png" alt="没有"></div>
            <button>开始认证</button>
        </div>
    </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'
export default {
    name:'Authentication',
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
#container{
    height: 880px;
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
.jiav{
    box-shadow: 0 0 15px #eee;
    border-radius: 20px;
}
button{
    height: 50px;
    width: 185px;
    background-color: #FEDB50;
    border: none;
    border-radius: 25px;
    font-size: 18px;
    margin-top: 20px;
}
</style>