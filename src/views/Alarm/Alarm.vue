<template>
  <div class="alarm">
    <BorderBox title="实时报警"></BorderBox>
  </div>
</template>

<script>
import BorderBox from "../../components/BorderBox";
export default {
  name: "alarm",
  components: {
    BorderBox
  }
};
</script>
  
<style lang="less">
.alarm {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>