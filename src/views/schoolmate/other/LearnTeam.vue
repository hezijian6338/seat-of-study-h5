<template>
  <div>
    <nav-bar class="nav-bar-container">
      <div slot="left" class="top-left-return" @click="backClick">
        <img  id="nav-return" src="~assets/imgs/common/fanhui.png" alt="学习小队" />
      </div>
      <span slot="center">学习小队</span>
    </nav-bar>

    <div class="flex-center">
        <img id="team_search" src="~assets/imgs/common/team_search.png" alt="">
        <div v-show="xShow" id="close" @click="cleanClick"><img  src="~assets/imgs/common/close.png" alt=""></div>
        <input class="search" type="text" name="search" id="search" placeholder="输入同学号/手机号来搜索小队" @keydown="inputChange" ref="s">
        <button class="outline-none" ><img  src="~assets/imgs/common/tianjia.png" alt="添加小队"> 创建小队</button>
        <span class="text">没有找到合适的小队?自己创建</span>
    </div>
    
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar";
export default {
  name: "LearnTeam",
  components: {
    NavBar
  },
  data(){
    return{
      xShow:false,
    }
  },
  methods:{
        //返回按钮的事件监听,点击后返回之前路由
       backClick(){
            this.$router.back()
            
        },

      //监听input改变,有值的时候显示叉号
      inputChange(event){
        // console.log(event)
        this.xShow=true
      },
      //监听叉号的点击事件,点击了清除input内容
      cleanClick(){
        this.xShow=false
        this.$refs.s.value=""
        
      }
  }
};
</script>

<style scoped>
button{
    height: 50px;
    width: 185px;
    background-image: linear-gradient(45deg,#FDD84F,#F9E496);
    border: none;
    border-radius: 25px;
    font-size: 18px;
    margin-top:500px;
}
button img{
    /* display: inline-block; */
    width: 30px;
    vertical-align: middle;
}

.text{
    margin-top: 18px;
    font-size: 16px;
}

.search{
    width: 360px;
    height: 40px;
    padding:10px 40px;
    border-radius: 40px;
    border: none;
    background-color: #f4f4f4;
    outline: none;
    font-size: 18px;
    
}

input::-webkit-input-placeholder{
            color:#ddd;
        }
        input::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color:#ddd;
        }
        input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
            color:#ddd;
        }
        input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
            color:#ddd;
        }

.flex-center{
  position: relative;
}

#team_search{
  position: absolute;
  left: 25px;
  top:13px;
}
#close{
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border:solid 1px gray;
  overflow: hidden;
  right: 40px;
  top: 18px;

}
#close img{
 width: 100%;
 height: 100%;
}
</style>