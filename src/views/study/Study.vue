<template>
    <div id="container">
        <nav-bar><span slot="center">不占座</span></nav-bar>
        <study-top></study-top>
        <study-center></study-center>
        <study-bottom></study-bottom>
        <main-tab-bar></main-tab-bar>
    </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'
import StudyTop from './children/StudyTop'
import StudyCenter from './children/StudyCenter'
import StudyBottom from './children/StudyBottom'
import MainTabBar from 'components/common/MainTabBar/MainTabBar'
export default {
    name:'Study',
    components:{
        NavBar,
        StudyTop,
        StudyCenter,
        StudyBottom,
        MainTabBar
        
    }
}
</script>

<style scoped>
#container{
    height: 880px;
}
</style>