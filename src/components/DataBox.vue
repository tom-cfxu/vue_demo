<template class="template">
  <div class="dataBox">
    <i :class="icon"></i>
    &nbsp;
    {{name}} : {{value}}{{unit}}
  </div>
</template>

<script>
export default {
  name: "dataBox",
  props: {
    icon: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    unit: {
      type: String,
      default: ""
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.dataBox {
  // width: 100%;
  min-height: 50px;
  font-size: 20px;
  text-align: left;
  // border: 2px solid #36a383;
  margin: 5px 10px;
  padding-left: 2vw;
  display: flex;
  // justify-content: center;
  font-family: "Helvetica";
  align-items: center;
  color: #fff;
  border-radius: 10px;
  background: linear-gradient(135deg, rgb(0, 238, 255), rgb(64, 141, 248));
  box-shadow: -8px -8px 10px -12px rgb(196, 242, 248),
    8px 8px 10px -5px rgba(0, 0, 0, 1);
  user-select: none;
}
</style>
