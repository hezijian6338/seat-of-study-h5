<template>
  <div  id="study-bottom-container">
      <div class="study-bottom-item" @click="gotoStudyTime">
            <img src="~assets/imgs/study/timer_study.png" alt="时间瓶">
            <span class="learn1">学习计时</span>
            <span class="learn2">随时随地,专注学习</span>
      </div>
      <div class="study-bottom-item" >
            <img src="~assets/imgs/study/sitting_study.png" alt="时间瓶">
            <span class="learn1" >扫码上座</span>
            <span class="learn2">规范座位,专注学习</span>
      </div>
      <span class="search" @click="gotoSearchSeatClick">查找座位<img src="~assets/imgs/study/right_arrow.png" alt="时间瓶"></span>
  </div>
</template>

<script>
export default {
    name:'StudyBottom',
    methods:{
        gotoSearchSeatClick(){
            this.$router.push('/searchseat')
        },
        gotoStudyTime(){
            this.$router.push('/studytime')
        }
    }
}
</script>

<style scoped>
#study-bottom-container{
    position: relative;
    margin-top: 23px;
    display: flex;
    /* background-color: red; */
    /* height: 130px; */
    justify-content: space-evenly;
    align-items: center;
}
.study-bottom-item{
    height: 190px;
    width: 200px;
    background-color: #fff;
    box-shadow: 0 0 10px #eee;
    display: flex;
    justify-content:center;
    /* align-items: center; */
    flex-direction: column;
}
.study-bottom-item img{
    height: 77px;
    width: 77px;
    margin-left: 5px;
    margin-bottom: 15px;

}
.learn1{
    font-size: 21px;
    font-weight: 500;
     margin-left:18px;
}
.learn2{
    color:#a6a6a7;
    margin-left:18px;
}
.search{
    position: absolute;
    right: 45px;
    top:35px;
}
.search img{
   margin: 0 0 0 3px;
   width: 10px;
   height: 10px;
}
</style>