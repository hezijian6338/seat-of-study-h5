<template>
  <div>
    <nav-bar>
      <span slot="center">我的</span>
    </nav-bar>
    <div id="content">
      <personal-top></personal-top>
      <personal-middle></personal-middle>
      <personal-bottom></personal-bottom>
    </div>
    <main-tab-bar></main-tab-bar>
  </div>

</template>

<script>
import NavBar from "components/content/navbar/NavBar";
import MainTabBar from 'components/common/MainTabBar/MainTabBar'
import PersonalTop from "./children/PersonalTop";
import PersonalMiddle from "./children/PersonalMiddle";
import PersonalBottom from "./children/PersonalBottom";

export default {
  name: "Personal",
  components: {
    NavBar,
    PersonalTop,
    PersonalMiddle,
    PersonalBottom,
    MainTabBar
  }
}
</script>

<style scoped>
#content{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1000px;
}
</style>