<template>
  <div id="container" class="flex-center">
      <div class="ww">
          <div class="item1">
              <slot name="finished"><span>已结束</span></slot>
          </div>
          <slot name="picture"><img src="~assets/imgs/study/zhanwei.png" alt=""></slot>
          <div class="title"><slot name="item-title"><span>标题哦</span></slot></div>
          <div class="zanzhu"><slot name="zanzhu"><span>赞助商</span></slot></div>
          <div class="item2">
              <img id="points-item" src="~assets/imgs/study/points_item.png" alt="">
              <span class="text1"><slot name="count1"><span>1000</span></slot></span>
              <span class="text2"><slot name="count2"><span>1</span></slot>份</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'ShopItem'
}
</script>

<style scoped>
#container{
    width: 205px;
    height: 315px;
    background-color: #fff;
    position: relative;
    margin-bottom: 10px;
}
.item1{
    width: 60px;
    height: 25px;
    background-color: #d8d8d8;
    line-height: 25px;
    text-align: center;
    margin-top:10px ;
    color:#fff;
    font-size: 15px;
    
}
.ww{
    width: 180px;
}
.title{
    font-size: 16px;
}
.zanzhu{
    margin-top:5px;
    font-size: 14px;
    color:#ffcc52;
}
#points-item{
    width: 22px;
}
.item2{
    position: absolute;
    bottom: 10px;
    display: flex;
    align-items: center;
}
.text1{
    font-size: 18px;
}
.text2{
    margin-left:80px ;
    font-size: 14px;
}
</style>