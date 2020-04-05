<template>
    <div id="container" :class="{'flex-center':true,active:currentIndex===index}" @click="itemclick">
        <span :class="{item2:true,item2active:currentIndex===index}"><slot></slot></span>
    </div>
</template>

<script>
export default {
    name:'Brand',
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
    methods:{
        itemclick(){
            this.$emit('Btnclick',this.index)
        }
    }
}
</script>

<style scoped>
#container{
    height: 30px;
    background-color: #f7f7f6;
    border-radius: 15px;
    margin-bottom: 5px;
    margin-right: 10px;
    padding: 0 10px;
}
.flex-center{
    justify-content: center;
}
.item2{
    font-size: 14px;
    color:#aaa;
}
.active{
    background-color: #fed63f !important;
}

.item2active{
    color: black ;
}
</style>