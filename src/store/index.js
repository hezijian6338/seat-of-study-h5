import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        isShow:true
    },
    mutations:{
        changeShow(state){
            // console.log(this.$route)
            // state.isShow=!state.isShow
        }
    },
    getters:{

    },
    actions:{

    },
    modules:{

    }


})

export default store

