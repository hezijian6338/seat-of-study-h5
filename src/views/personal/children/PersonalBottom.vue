<template>
  <div id="personal-bottom-container" class="w">
      <div class="bottom-item">
          <span  @click="tabClick" :class="{acitive:isActive}">动态(0)</span>
          <span  @click="tabClick" :class="{acitive:!isActive}">学习</span>
          <div :class="{border:isActive,border2:!isActive}"></div>
      </div>
      <div v-if="isActive" class="common-item bottom-item1">
          <img class="star"  src="~assets/imgs/personal/no_sns.png" alt="星星">
          <span class="text text2">快来发表你的第一条动态吧~</span>
          <button><img class="add" src="~assets/imgs/personal/add_sns.png" alt=""><span>发布动态</span></button>
      </div>
      <div v-else class="common-item bottom-item2">
          <img class="nostudy" src="~assets/imgs/personal/no_study.png" alt="没学习">
          <span class="text text2">还没开始学习哦</span>
          <span class="text text2">抓紧时间赶快去学习吧</span>
          <button @click="gotoStudyClick">去学习</button>
      </div>
  </div>
</template>

<script>

export default {
    name:'PersonalBottom',
    components:{
    },
    data(){
        return{
            isActive:true
        }
    },
    methods:{
        tabClick(){
            this.isActive=!this.isActive
        },
        gotoStudyClick(){
            this.$router.push('/study')
        }

    }
}
</script>

<style scoped>
#personal-bottom-container{
    padding-top:50px
}

.bottom-item span{ 
    font-size: 16px;
    padding-right:20px ;
    color: #a6a6a7;
}
.acitive{
    font-size:18px !important;
    color: black !important;
}
.border{
    width: 18px;
    border: 2px solid #FFD947;
    border-radius: 2px;
    position: relative;
    top:20px;
    left: 15px;
}
.border2{
    width: 18px;
    border: 2px solid #FFD947;
    border-radius: 2px;
    position: relative;
    top:20px;
    left:80px;
}


.common-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 125px;
}
.bottom-item1{

}
.star{
    height: 70px;
    margin-bottom: 10px;
}
.text2{
    font-size: 16px;
}
button{
    height: 50px;
    width: 185px;
    background-color: #FEDB50;
    border: none;
    border-radius: 25px;
    font-size: 18px;
    margin-top:70px;
}
.add{
    height: 15px;
    margin-right: 10px;
    position: relative;
    top:2px;
}
.nostudy{
    height: 190px;
}

</style>