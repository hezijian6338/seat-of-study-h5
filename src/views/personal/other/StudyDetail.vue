<template>
  <div id="container">
    <nav-bar class="nav-bar-container">
      <div slot="left" class="top-left-return" @click="backClick">
        <img  id="nav-return" src="~assets/imgs/common/fanhui.png" alt />
      </div>
      <span slot="center">学习详情</span>
    </nav-bar>
    <div class="flex-center">
      <div class="top-item w">
        <div>
          <div class="juli">{{todaytime.hour+'h'+todaytime.minute+'m'}}</div>
          <span class="text">今日学习</span>
        </div>
        <div>
          <div class="juli">{{sumtime.hour+'h'+sumtime.minute+'m'}}</div>
          <span class="text">累计学习</span>
          <div class="border"></div>
        </div>
        <div>
          <div class="juli">{{learnday+'d'}}</div>
          <span class="text">学习天数</span>
          <div class="border"></div>
        </div>
      </div>

      <div class="middle-contain w">
        <div class="recent">最常学习</div>
        <div class="middle-item">
          <div>高等数学</div>
          <div>加油</div>
          <div>奋斗!</div>
        </div>
      </div>
      <personal-bottom></personal-bottom>
    </div>
    
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar";
import PersonalBottom from ".././children/PersonalBottom";
export default {
  name: "StudyDetail",
  components: {
    NavBar,
    PersonalBottom
  },
  data() {
    return {
      todaytime: {
        hour: 0,
        minute: 0
      },
      sumtime: {
        hour: 0,
        minute: 0
      },
      learnday: 1,
      isActive:true
    };
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    tabClick() {
      this.isActive = !this.isActive;
    },
  },
  computed: {}
};
</script>

<style scoped>
.top-item {
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 18px;
  padding-top: 20px;
}
.top-item span {
  font-size: 15px;
}
.juli {
  padding-bottom: 8px;
  font-size: 23px;
}
.border {
  height: 36px;
  width: 1px;
  position: relative;
  right: 35px;
  bottom: 45px;
  background-color: #eee;
}


.recent {
  font-size: 20px;
}
.middle-item {
  display: flex;
  margin-top: 20px;
}
.middle-item div {
  background-color: #f8f8fa;
  height: 60px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 16px;
}

</style>