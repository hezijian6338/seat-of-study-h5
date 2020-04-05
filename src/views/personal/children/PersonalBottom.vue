<template>
  <div id="personal-bottom-container" class="w">
    <div class="bottom-item">
      <span @click="tabClick" :class="{acitive:isActive}">动态(0)</span>
      <span @click="tabClick" :class="{acitive:!isActive}">学习</span>
      <div :class="{border:isActive,border2:!isActive}"></div>
    </div>
    <div v-if="isActive" class="common-item bottom-item1">
      <img class="star" src="~assets/imgs/personal/no_sns.png" alt="星星" />
      <span class="text text2">快来发表你的第一条动态吧~</span>
      <button class="outline-none">
        <img class="add" src="~assets/imgs/personal/add_sns.png" alt />
        <span @click="centerDialogVisible = true" >发布动态</span>
      </button>
    </div>
    <div v-else class="common-item bottom-item2">
      <img class="nostudy" src="~assets/imgs/personal/no_study.png" alt="没学习" />
      <span class="text text2">还没开始学习哦</span>
      <span class="text text2">抓紧时间赶快去学习吧</span>
      <button @click="gotoStudyClick" class="outline-none">去学习</button>
    </div>

    <!-- 弹出对话框 -->
    <el-dialog  :visible.sync="centerDialogVisible" width="50%" center>
      <div class="renzheng">认证提醒</div>
      <div class="text">认证学校后才能进行互动哦</div>
      <button @click="gotoAuthentication">去认证</button>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "PersonalBottom",
  components: {},
  data() {
    return {
      isActive: true,
      centerDialogVisible: false
    };
  },
  methods: {
    tabClick() {
      this.isActive = !this.isActive;
    },
    gotoStudyClick() {
      this.$router.push("/study");
    },
    gotoAuthentication(){
      this.$router.push("/authentication");
    }
  }
};
</script>

<style scoped>
#personal-bottom-container {
  padding-top: 50px;
}

.bottom-item span {
  font-size: 16px;
  padding-right: 20px;
  color: #a6a6a7;
}
.acitive {
  font-size: 18px !important;
  color: black !important;
}
.border {
  width: 18px;
  border: 2px solid #ffd947;
  border-radius: 2px;
  position: relative;
  top: 20px;
  left: 15px;
}
.border2 {
  width: 18px;
  border: 2px solid #ffd947;
  border-radius: 2px;
  position: relative;
  top: 20px;
  left: 80px;
}

.common-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 125px;
}

.star {
  height: 70px;
  margin-bottom: 10px;
}
.text2 {
  font-size: 16px;
}
button {
  height: 50px;
  width: 185px;
  background-color: #fedb50;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  margin-top: 70px;
}
.add {
  height: 15px;
  margin-right: 10px;
  position: relative;
  top: 2px;
}
.nostudy {
  height: 190px;
}
.renzheng{
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    padding: 0 0 10px 0 ;
}
.text{
    text-align: center;
}
</style>