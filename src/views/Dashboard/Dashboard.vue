<template>
  <div class="dashboard">
    <div class="left">左图表</div>
    <div class="center">地图</div>
    <div class="right">右图表</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
  .dashboard{
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "left center right";
    .left{
      background-color: aqua;
      // height:100vh;
    }
    .center{
      background-color: #ff00dd;
    }
    .right{
      background-color: #1eff00;
    }
  }
</style>