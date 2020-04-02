<template>
  <div id="schoolmate">
    <nav-bar><span slot="center">同学</span></nav-bar>
    <school-mate-top></school-mate-top>
    <school-mate-middle></school-mate-middle>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'
import MainTabBar from 'components/common/MainTabBar/MainTabBar'
import SchoolMateTop from './children/SchoolMateTop'
import SchoolMateMiddle from './children/SchoolMateMiddle'
export default {
    name:'SchoolMate',
    components:{
        NavBar,
        SchoolMateTop,
        SchoolMateMiddle,
        MainTabBar
    }
}
</script>

<style scoped>

</style>