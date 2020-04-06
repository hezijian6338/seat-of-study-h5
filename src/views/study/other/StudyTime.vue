<template>
  <div id="container">
    <nav-bar class="nav-bar-container">
      <div slot="left" class="top-left-return" @click="backClick">
        <img id="nav-return" src="~assets/imgs/common/fanhui.png" alt />
      </div>
      <span slot="center">学习计时</span>
    </nav-bar>
    <div class="flex-center">
      <div class="w box1 flex-center">
        <div class="w2">
          <div class="border">
            <img class src="~assets/imgs/study/clock.png" alt />
          </div>
          <div class="text1">选择你的学习时长</div>
          <div class="box-item1">
            <time-study :time="300" :index="0" :currentIndex="currentIndex" @Btnclick="Btnclick">
              <span>闭目冥想</span>
            </time-study>
            <time-study :time="600" :index="1" :currentIndex="currentIndex" @Btnclick="Btnclick">
              <span>背诵单词</span>
            </time-study>
            <time-study :time="1500" :index="2" :currentIndex="currentIndex" @Btnclick="Btnclick">
              <span>专注训练</span>
            </time-study>
            <time-study :time="2700" :index="3" :currentIndex="currentIndex" @Btnclick="Btnclick">
              <span>听一节课</span>
            </time-study>
            <time-study :time="3600" :index="4" :currentIndex="currentIndex" @Btnclick="Btnclick">
              <span>读一本书</span>
            </time-study>
            <time-study :time="5400" :index="5" :currentIndex="currentIndex" @Btnclick="Btnclick">
              <span>写一套题</span>
            </time-study>
          </div>
        </div>
      </div>
      <div class="w box2 flex-center">
        <div class="w2">
          <div class="text2">选择你的学习标签</div>
          <input type="text" id="brand" placeholder="最多输入六个字" ref="brand" />
          <div class="box-item2">
            <brand :index="0" :currentIndex="currentIndex2" @Btnclick="Btn2click">
              <span>闭目冥想</span>
            </brand>
            <brand :index="1" :currentIndex="currentIndex2" @Btnclick="Btn2click">
              <span>加油!</span>
            </brand>
            <brand :index="2" :currentIndex="currentIndex2" @Btnclick="Btn2click">
              <span>数学!!!!</span>
            </brand>
            <brand :index="3" :currentIndex="currentIndex2" @Btnclick="Btn2click">
              <span>英语背单词啦</span>
            </brand>
            <brand :index="4" :currentIndex="currentIndex2" @Btnclick="Btn2click">
              <span>睡了睡了</span>
            </brand>
            <brand :index="5" :currentIndex="currentIndex2" @Btnclick="Btn2click">
              <span>晚安</span>
            </brand>
            <brand :index="6" :currentIndex="currentIndex2" @Btnclick="Btn2click">
              <span>gg</span>
            </brand>
            <brand :index="7" :currentIndex="currentIndex2" @Btnclick="Btn2click">
              <span>凉凉了</span>
            </brand>
          </div>
        </div>
      </div>
    </div>
    <button id="startstudy" @click="startClick">开始学习</button>
   
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar";
import TimeStudy from "components/content/timestudy/TimeStudy";
import Brand from "components/content/brand/Brand";
export default {
  name: "StudyTime",
  components: {
    NavBar,
    TimeStudy,
    Brand
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    Btnclick(obj) {
      this.currentIndex = obj.index;
      this.time = obj.time;
    },
    Btn2click(index) {
      this.currentIndex2 = index;
      console.log((this.$refs.brand.value = this.brandList[index]));
    },
    startClick() {
      this.$store.commit("TimeStart", {
        time: this.time,
        tagName: this.brandList[this.currentIndex2]
      });
      this.$router.push("/study");
      this.$store.dispatch("TimeCalculate");
    }
  },
  data() {
    return {
      currentIndex: 0,
      currentIndex2: 0,
      brandList: [
        "闭目冥想",
        "加油!",
        "数学!!!!",
        "英语背单词啦",
        "睡了睡了",
        "晚安",
        "gg",
        "凉凉了"
      ],
      time: 300,
      
    };
  }
};
</script>

<style scoped>
.box1 {
  height: 300px;
  margin-top: 40px;
  box-shadow: 0 0 30px #eee;
  border-radius: 5px;
  background: url("~assets/imgs/study/clock_bg.png") no-repeat right 5px/80px;
}
.w2 {
  width: 380px;
}
.border {
  width: 50px;
  height: 50px;
  background-color: #f4f4ef;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 4px solid #fefefe;
  box-shadow: 0 0 5px #eee;
  position: relative;
  top: -27px;
}
.border img {
  width: 36px;
}
.text1 {
  font-size: 18px;
}
.box-item1 {
  margin-top: 20px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.box2 {
  height: 440px;
  margin-top: 20px;
  box-shadow: 0 0 30px #eee;
  border-radius: 5px;
}
.text2 {
  font-size: 18px;
  margin-top: 30px;
}
#brand {
  margin-top: 50px;
  border: none;
  background-color: #f7f8fa;
  padding: 20px 18px;
  outline: none;
  font-size: 19px;
  width: 340px;
}
::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #cecfd3;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #cecfd3;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #cecfd3;
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #cecfd3;
}
.box-item2 {
  margin-top: 20px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
#startstudy {
  position: fixed;
  bottom: 40px;
  background-color: #fed63f;
  border: none;
  font-size: 20px;
  padding: 15px 70px;
  border-radius: 30px;
  left: 130px;
  outline: none;
}
</style>