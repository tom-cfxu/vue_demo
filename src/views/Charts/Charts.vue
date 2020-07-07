<template>
  <div class="charts">
    <BorderBox title="趋势图表"></BorderBox>
  </div>
</template>

<script>
import BorderBox from "../../components/BorderBox";
export default {
  components: {
    BorderBox
  }
};
</script>

<style lang="less">
.charts {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>