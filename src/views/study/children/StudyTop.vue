<template>
  <div  id="study-top-container">
      <div class="study-top-item" @click="gotoTimeBottle">
            <img src="~assets/imgs/study/bottle.png" alt="时间瓶">
            <span>时间瓶</span>
      </div>
      <div class="study-top-item" @click="gotoShop">
            <img src="~assets/imgs/study/shop.png" alt="小店">
            <span>小店</span>
      </div>
      <div class="study-top-item" @click="gotoRank">
            <img src="~assets/imgs/study/rank.png" alt="排行榜">
            <span>排行榜</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'StudyTop',
    methods:{
        gotoTimeBottle(){
              this.$router.push('/timebottle')
        },
        gotoShop(){
              this.$router.push('/shop')
        },
        gotoRank(){
              this.$router.push('/rank')
        }
    }
}
</script>

<style scoped>
#study-top-container{
    display: flex;
    /* background-color: red; */
    height: 130px;
    justify-content: space-evenly;
    align-items: center;
}
.study-top-item{
    height: 110px;
    width: 130px;
    background-color: #fff;
    box-shadow: 0 0 10px #eee;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
}
.study-top-item img{
    height: 35px;
    margin-bottom: 7px;

}

</style>