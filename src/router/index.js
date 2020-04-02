import Vue from 'vue'
import VueRouter from 'vue-router'

//使用VueRouter插件
Vue.use(VueRouter)

//懒加载
// import Study from 'views/study/Study.vue'
const Study=()=>import('views/study/Study.vue')
const SearchSeat=()=>import('views/study/SearchSeat.vue')


const SchoolMate=()=>import('views/schoolmate/SchoolMate.vue')
const TongZhi=()=>import('views/schoolmate/TongZhi.vue')
const LearnTeam=()=>import('views/schoolmate/LearnTeam.vue')

const Sns=()=>import('views/sns/Sns.vue')


const Personal=()=>import('views/personal/Personal.vue')
const Authentication=()=>import('views/personal/Authentication.vue')
const More=()=>import('views/personal/More.vue')
const GetGood=()=>import('views/personal/GetGood.vue')
const Visted=()=>import('views/personal/Visted.vue')


//配置路由
const routes=[
    {
        path:'/',
        redirect:'/study'
    },

    {
        path:'/study',
        component:Study
    },
    {
        path:'/searchseat',
        component:SearchSeat
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
    }

]
//创建路由对象
const router=new VueRouter({
    routes
})

//导出路由对象
export default router