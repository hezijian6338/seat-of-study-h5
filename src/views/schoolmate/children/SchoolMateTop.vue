<template>
  <div id="top-container">
      <div class="top-item" @click="LearnTeamClick">
          <img src="~assets/imgs/schoolmate/team_icon_messages.png" alt="">
          <span>学习小队</span>
      </div>
      <div class="top-item" @click="TongZhiClick">
          <img src="~assets/imgs/schoolmate/notification_icon.png" alt="">
          <span>系统通知</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'SchoolMateTop',
    methods:{
        TongZhiClick(){
            this.$router.push('/tongzhi')
          
        },
        LearnTeamClick(){
            this.$router.push('/learnteam')
            
        }
    }
}
</script>

<style scoped>
#top-container{
    height: 196px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.top-item{
    /* height: ; */
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    padding: 15px 0 ;
}
.top-item img{
    height: 52px;
    width: 52px;
    margin: 0 10px 0 10px;
}
</style>