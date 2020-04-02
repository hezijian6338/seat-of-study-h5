<template>
  <div id="personal-top-container" class="w">
      <img class="touxiang" src="~assets/imgs/common/default_avatar.png" alt="头像">
      <div>
          <div @click="gotoAuthenticationClick">
              <span class="name">Bosco</span>
              <img class="renzheng" src="~assets/imgs/personal/renzheng.png" alt="去认证">
          </div>
          <div>
              <span class="text">专注力训练营</span>
          </div>
          
      </div>
     <img class="more-personal"  @click="gotoMoreClick" src="~assets/imgs/personal/more_personal.png" alt="更多">
  </div>
</template>

<script>

export default {
    name:'PersonalTop',
    components:{
    },
    methods:{
        gotoAuthenticationClick(){
             this.$router.push('/authentication')
            this.$store.commit('changeShow')
        },
        gotoMoreClick(){
            this.$router.push('/more')
            this.$store.commit('changeShow')
        }
    }
}
</script>

<style scoped>

#personal-top-container{
    display: flex;
    align-items: center;
    padding:15px 0;
    position: relative;
}
.touxiang{
    width: 77px;
    height: 77px;
}
.name{
    font-weight: 500;
    font-size: 23px;
}
.renzheng{
    margin-left: 10px;
    vertical-align: middle;;
}
.text{
    font-size: 16px;
    font-weight: 500;
}
.more-personal{
    position: absolute;
    right: 0;
    width: 40px;
    height: 40px;
}
</style>