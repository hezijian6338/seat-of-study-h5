<template>
  <div id="personal-middle-container" class="w">
      <div class="middle-top-item">
          <div class="item1"></div>
          <div @click="gotoStudyDetail">
              <div class="juli">{{time+'d'}}</div>
              <span class="text">学习详情</span>
              
          </div>
          <div @click="gotoGetGood">
              <div class="juli">0</div>
              <span class="text">获得称赞</span>
              <div class="border"></div>
          </div>
          <div @click="gotoVisted">
              <div class="juli">0</div>
              <span class="text">最近来访</span>
              <div class="border"></div>
          </div>
      </div>

      <div class="middle-bottom-item">
          <img class="pop" src="~assets/imgs/personal/pop.gif" alt="">
          <img class="bottle" src="~assets/imgs/personal/bottle.png" alt="">
          <div class="center-right" @click="gotoTimeBottle">
              <div class="center-right-top">
              <span class="time">时间颗粒</span>
              <img  class="lv1" src="~assets/imgs/personal/lv1.png" alt="">
              <span v-show="false">待领取</span>
              </div>
              <el-progress :percentage="percent" :show-text="false"></el-progress>
              <div class="text">{{now+'/'+sum}} {{percent+'%'}}</div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    name:'PersonalMiddle',
    components:{
        
    },
    data(){
        return{
            time:1,
            now:this.$store.state.timecount,
            sum:10000,
        }
    },
    methods:{
        gotoStudyDetail(){
            this.$router.push('/studydetail')
        },
        gotoGetGood(){
            this.$router.push('/getgood')
            
        },
        gotoVisted(){
            this.$router.push('/visited')
            
        },
        gotoTimeBottle(){
            this.$router.push('/timebottle')
        }
    },
    computed:{
        percent(){
            return (this.now/this.sum)*100
        }
    }
}
</script>

<style scoped>
#personal-middle-container{
display: flex;
flex-direction: column;
padding: 10px 0;
}
.item1{
    width: 10px;
}
.middle-top-item{
    display: flex;
    justify-content: space-between;
    text-align: center;
    font-size: 18px;
    
}
.middle-top-item span{
    font-size: 16px;
}
.juli{
    padding-bottom: 8px;
}
.border{
    height: 36px;
    width: 1px;
    position: relative;
    right: 36px;
    bottom: 45px;
    background-color: #eee;
}


.middle-bottom-item{
    height: 96px;
    background-color: #f8f8fa;
    border-radius: 5px;
    display: flex;
    align-items: center;
    position: relative;
}
.pop{
    position: absolute;
    width: 100px;
    bottom: 70px;
}

.bottle{
    height: 70px;
    margin:10px 0 0 15px;
}


.center-right{
    margin-left: 10px;
    width:300px;
}
.center-right-top{
    padding-bottom:8px ;
}
.time{
    font-size: 18px;
}
.lv1{
    vertical-align: bottom;
}
.text{
    padding-top: 10px;
}

</style>