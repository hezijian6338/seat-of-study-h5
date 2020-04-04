import Vue from 'vue'
import VueRouter from 'vue-router'

//使用VueRouter插件
Vue.use(VueRouter)

//懒加载
// import Study from 'views/study/Study.vue'
const Study=()=>import('views/study/Study.vue')
const SearchSeat=()=>import('views/study/other/SearchSeat.vue')
const Rank=()=>import('views/study/other/Rank.vue')
const Shop=()=>import('views/study/other/Shop.vue')
const TimeBottle=()=>import('views/study/other/TimeBottle.vue')
const Exchange=()=>import('views/study/other/Exchange.vue')

const SchoolMate=()=>import('views/schoolmate/SchoolMate.vue')
const TongZhi=()=>import('views/schoolmate/other/TongZhi.vue')
const LearnTeam=()=>import('views/schoolmate/other/LearnTeam.vue')

const Sns=()=>import('views/sns/Sns.vue')


const Personal=()=>import('views/personal/Personal.vue')
const Authentication=()=>import('views/personal/other/Authentication.vue')
const More=()=>import('views/personal/other/More.vue')
const GetGood=()=>import('views/personal/other/GetGood.vue')
const Visted=()=>import('views/personal/other/Visted.vue')
const StudyDetail=()=>import('views/personal/other/StudyDetail.vue')


//配置路由
const routes=[
    {
        path:'/',
        redirect:'/study'
    },
    //学习 相关路由
    {
        path:'/study',
        component:Study
    },
    {
        path:'/searchseat',
        component:SearchSeat
    },
    {
        path:'/rank',
        component:Rank
    },
    {
        path:'/shop',
        component:Shop
    },
    {
        path:'/timebottle',
        component:TimeBottle
    },
    {
        path:'/exchange',
        component:Exchange
    },

    
    //同学 相关路由
    {
        path:'/schoolmate',
        component:SchoolMate
    },
    {
        path:'/tongzhi',
        component:TongZhi
    },
    {
        path:'/learnteam',
        component:LearnTeam
    },

    //朋友圈相关路由
    {
        path:'/sns',
        component:Sns
    },


    //我的 相关路由
    {
        path:'/personal',
        component:Personal
    },
    {
        path:'/authentication',
        component:Authentication
    },
    {
        path:'/more',
        component:More
    },
    {
        path:'/getgood',
        component:GetGood
    },
    {
        path:'/visited',
        component:Visted
    },
    {
        path:'/studydetail',
        component:StudyDetail
    }

]
//创建路由对象
const router=new VueRouter({
    routes
})

//导出路由对象
export default router