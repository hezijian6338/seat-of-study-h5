<template>
  <div class="nav-container">
      <div class="nav-item"><slot name="left"></slot></div>
      <div class="nav-item"><slot name="center"></slot></div>
      <div class="nav-item"><img class="daohang" src="~assets/imgs/guide/daohang.png" alt=""></div>

  </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style scoped>
.nav-container{
    display: flex;
    height: 72px;
    /* line-height: 44px; */
}
.nav-item{
    flex: 1;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
   
}
.daohang{
    height: 40px;
}
</style>