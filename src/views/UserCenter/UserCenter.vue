<template>
  <div class="user-center">
    <BorderBox title="用户中心"></BorderBox>
  </div>
</template>

<script>
import BorderBox from "../../components/BorderBox";
export default {
  name: "userCenter",
  components: {
    BorderBox
  }
};
</script>
  
<style lang="less">
.user-center {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>