<template>
    <div>
        <nav-bar><span slot="center">学习圈</span></nav-bar>
        <main-tab-bar></main-tab-bar>
    </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'
import MainTabBar from 'components/common/MainTabBar/MainTabBar'
export default {
    name:'Sns',
    components:{
        NavBar,
        MainTabBar
    }
}
</script>

<style scoped>

</style>