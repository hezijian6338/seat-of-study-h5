<template>
    <tab-bar >
        <tab-bar-item  path="/study">
            <img slot="item-icon" src="~assets/imgs/tab/index.png" alt="主页">
            <img slot="item-icon-active" src="~assets/imgs/tab/index_s.png" alt="激活的主页">
            <span slot="text">学习</span>
        </tab-bar-item>
        <tab-bar-item path="/schoolmate">
            <img slot="item-icon" src="~assets/imgs/tab/schoolmate.png" alt="主页">
            <img slot="item-icon-active" src="~assets/imgs/tab/schoolmate_s.png" alt="激活的主页">
            <span slot="text">同学</span>
        </tab-bar-item>
        <tab-bar-item path="/sns">
            <img slot="item-icon" src="~assets/imgs/tab/school.png" alt="主页">
            <img slot="item-icon-active" src="~assets/imgs/tab/school_s.png" alt="激活的主页">
            <span slot="text">学习圈</span>
        </tab-bar-item>
        <tab-bar-item path="/personal"> 
            <img slot="item-icon" src="~assets/imgs/tab/profile.png" alt="主页">
            <img slot="item-icon-active" src="~assets/imgs/tab/profile_s.png" alt="激活的主页">
            <span slot="text">我的</span>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '../TabBar/TabBar'
import TabBarItem from '../TabBar/TabBarItem'

export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>
img{
    height: 100%;
}

</style>