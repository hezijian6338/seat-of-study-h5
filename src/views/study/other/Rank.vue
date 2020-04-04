<template>
  <div id="container">
    <nav-bar class="nav-bar-container">
      <div slot="left" class="top-left-return" @click="backClick">
        <img src="~assets/imgs/common/fanhui.png"  id="nav-return" alt="返回" />
      </div>
      <span slot="center">超级榜单</span>
    </nav-bar>
    <div class="flex-center">
      <img src="~assets/imgs/study/first.png" alt="小队学霸榜" />
      <img src="~assets/imgs/study/second.png" alt="全国学霸榜" />
      <img src="~assets/imgs/study/third.png" alt="校内学霸榜" />
      <img id="back" src="~assets/imgs/study/back.png"  @click="gotoStudy"  alt="去首页" />
    </div>
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar";

export default {
  name: "Rank",
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    gotoStudy(){
        this.$router.push('/study')
    }
  }
};
</script>

<style scoped>
.flex-center img{
    margin-bottom: 20px;
}
#back{
    width: 150px;
}
</style>