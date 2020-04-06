<template>
  <div class="flex-center">
    <el-progress
      :width="200"
      type="circle"
      :percentage="this.$store.getters.percent"
      :show-text="false"
    ></el-progress>
    <div class="count-time">{{this.$store.getters.countTime}}</div>
    <div id="time-icon" class="tag-name">{{this.$store.state.tagName}}</div>
    <button class="btn1" @click="centerDialogVisible=true">结束</button>
    <el-dialog :visible.sync="centerDialogVisible" width="50%" center>
      <div class="flex-center">
        <div class="jieshu">结束提醒</div>
        <div class="text">您确定要放弃学习吗?</div>
        <button class="btn outline-none" @click="btnClick">放弃</button>
        <button class="btn btn2 outline-none" @click="centerDialogVisible=false">取消</button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "StudyBottom2",
  methods: {
    btnClick() {
      this.$store.commit("TimeZero");
    }
  },
  data() {
    return {
      centerDialogVisible: false
    };
  }
};
</script>

<style scoped>
.flex-center {
  margin-top: 30px;
}
.count-time {
  width: 200px;
  text-align: center;
  font-size: 40px;
  position: relative;
  top: -150px;
}
.tag-name {
  width: 200px;
  text-align: center;
  font-size: 25px;
}
#time-icon {
  background: url("~assets/imgs/study/timer_icon.png") no-repeat top
    center/130px;
  height: 130px;
  width: 130px;
  position: relative;
  top: -130px;
}
.btn1 {
  height: 50px;
  width: 185px;
  background-color: #fedb50;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  outline: none;
}
.jieshu{
  font-size: 20px;
}
.text{
  margin:10px 0 20px 0;
  font-size: 16px;
}
.btn2{
  background-color: #eee;
  margin-top: 10px;
}
</style>