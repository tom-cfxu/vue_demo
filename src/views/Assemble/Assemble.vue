<template>
  <div class="assemble">
    <BorderBox class="content">
      <img class="img" src="../../assets/img/assemble.png" alt />
    </BorderBox>
  </div>
</template>

<script>
import BorderBox from "../../components/BorderBox";
export default {
  name: "assemble",
  components: {
    BorderBox
  }
};
</script>
  
<style lang="less">
// @height: 650px;
.assemble {
  display: flex;
  width: 100%;
  height: 90%;
  justify-content: center;
  align-items: center;
  .content {
    // height: 650px;
    position: relative;
  }
}
.img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //   padding-top: 60px;
}
</style>