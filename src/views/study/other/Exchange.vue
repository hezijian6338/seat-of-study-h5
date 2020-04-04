<template>
  <div id="container">
    <nav-bar class="nav-bar-container">
      <div slot="left" class="top-left-return" @click="backClick">
        <img src="~assets/imgs/common/fanhui.png"  id="nav-return" alt="返回" />
      </div>
      <span slot="center">时间小店</span>
    </nav-bar>
    <div class="flex-center tongzhi-container">
            <img class="exchange-none" src="~assets/imgs/study/exchange_none.png" alt="没有">
            <span class="nothing">Nothing Here</span>
            <div class="text1">你所有兑换过的货,都会储存在这里</div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar";

export default {
  name: "Exchange",
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.back();
    },
   
  }
};
</script>

<style scoped>
.tongzhi-container{
    margin-top: 170px;
}
.nothing{
    font-size: 20px;
    font-weight: 900;
}

.exchange-none{
    width: 300px;
}
.text1{
    font-size: 16px;
    margin-top: 10px;
}
</style>