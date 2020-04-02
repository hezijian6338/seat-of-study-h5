<template>
    <div  class="tabbar-item" @click="itemClick"> 
          <div v-if="!isActive" class="tabbar-item-img"><slot name="item-icon"></slot></div>
          <div v-else class="tabbar-item-img"><slot name="item-icon-active"></slot></div>
          <div :class="{active:isActive}"><slot name="text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        path:String
    },

    data(){
        return{
            
        }
    },
    methods:{
        itemClick(){
            if(this.$route.path.indexOf(this.path)===-1)
            this.$router.push(this.path)            
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!==-1
        }
    }
    
}
</script>

<style scoped>
.tabbar-item{
    flex:1;
    text-align: center;
    font-size: 12px;
}
.tabbar-item-img{
    height: 38px;
}
.active{
    /* color: yellow; */
}
</style>