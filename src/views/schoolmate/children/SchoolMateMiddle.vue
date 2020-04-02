<template>
  <div  id="middle-container">
      <div class="item1">
          <span>我的同学(0/20)</span>
          <span>+添加</span>
      </div>
      <div class="item2">
          <div class="item3">
            <img id="img1" src="~assets/imgs/common/default_avatar.png" alt="">
          </div>
          <span>布同学</span>
          <img id="img2" src="~assets/imgs/common/app_badge@2x.png" alt="">
          <img src="~assets/imgs/common/guanfang.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
    name:'SchoolMateMiddle'
}
</script>

<style scoped>
#middle-container{
    border-top: #fcfaf6 solid 12px;
    border-bottom: #fcfaf6 solid 320px;
    height: 195px;
    
}
#img1{
    width: 65px;
    height: 65px;
}
#img2{
    margin:0 5px 0 10px;
    height: 18px;
    width: 18px;
}
.item1{
    padding: 18px 10px 30px 18px;
}
.item1 :nth-child(1){
    font-size: 21px;
}
.item1 :nth-child(2){
    margin-left: 260px;
}

.item2{
    display: flex;
    align-items: center;
}
.item3{
    margin-left: 18px;
    margin-right: 10px;
    display: inline-block;
    border: 1px solid #eee;
    border-radius: 50%;
    box-shadow: 0 0 5px #eee;
}
</style>