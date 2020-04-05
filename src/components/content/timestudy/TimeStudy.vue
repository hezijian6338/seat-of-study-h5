<template>
    <div id="container" :class="{'flex-center':true,active:currentIndex===index}" @click="itemclick">
        <div :class="{item1:true,item1active:currentIndex===index}">{{countTime}}</div>
        <span :class="{item2:true,item2active:currentIndex===index}"><slot></slot></span>
    </div>
</template>

<script>
export default {
    name:'TimeStudy',
    props:{
        time:Number,
        index:Number,
        currentIndex:{
            type:Number,
        }
    },
    data(){
        return{
            min:0,
            second:0,
            
        }
    },
    computed:{
        countTime(){
            this.second=this.time%60
            this.min=Math.floor(this.time/60)
            if(this.second<10)
            return this.min+':0'+this.second
            else
            return this.min+':'+this.second
        }
    },
    methods:{
        itemclick(){
            this.$emit('Btnclick',{index:this.index,time:this.time})
        }
    }
}
</script>

<style scoped>
#container{
    width: 115px;
    height: 75px;
    background-color: #f7f7f6;
    border-radius: 5px;
    margin-bottom: 5px;
}
.flex-center{
    justify-content: center;
}
.item1{
    margin-bottom: 3px;
    font-size: 22px;
    font-weight: 500;
    color:gray;
}
.item2{
    font-size: 14px;
    color:#aaa;
}
.active{
    background-color: #fed63f !important;
}
.item1active{
    color: black ;
}
.item2active{
    color: black ;
}
</style>