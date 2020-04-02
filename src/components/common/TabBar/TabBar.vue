<template>
  <div id="tabbar-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'tabbar'
}
</script>

<style scoped>
#tabbar-container{
    /* width: 480px; */

    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:#fff;
    height: 58px;
    border-top:1px solid #eeeeee ;
}
</style>