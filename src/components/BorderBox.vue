<template class="template">
  <div class="border">
    <i class="i1"></i>
    <i class="i2"></i>
    <i class="i3"></i>
    <i class="i4"></i>
    <div class="box1">
      <span class="title">{{title}}</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BorderBox",
  props: {
    title: {
      type: String,
      default: "标题"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@radius: 10px;
.border {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  box-sizing: border-box;
  border-radius: @radius;
  padding: 5px;
  box-shadow: 1px 1px 10px 1px #333;
  background-image: linear-gradient(60deg, #5736ec, #1baaee);
  .i1,
  .i2,
  .i3,
  .i4 {
    opacity: 0.9;
  }
  .i1 {
    // content: "";
    display: block;
    width: 20px;
    height: 100px;
    background: #1da7ee;
    position: absolute;
    transform: perspective(0.5em) rotateY(5deg);
    // transform: rotate(7deg);
    top: 5px;
    right: -18px;
    box-shadow: 1px 1px 10px 5px #333;
    z-index: -1;
  }
  .i2 {
    // content: "";
    display: block;
    width: 100px;
    height: 20px;
    background: #1da7ee;
    position: absolute;
    transform: perspective(0.5em) rotateX(5deg);
    // transform: rotate(7deg);
    top: -18px;
    right: 5px;
    z-index: -1;
  }
  .i3 {
    // content: "";
    display: block;
    width: 20px;
    height: 100px;
    background: #5736ec;
    position: absolute;
    transform: perspective(0.5em) rotateY(-5deg);
    // transform: rotate(7deg);
    bottom: 5px;
    left: -18px;
    z-index: -1;
  }
  .i4 {
    // content: "";
    display: block;
    width: 100px;
    height: 20px;
    background: #5736ec;
    position: absolute;
    transform: perspective(0.5em) rotateX(-5deg);
    // transform: rotate(7deg);
    // box-shadow: -1px -1px 10px 5px #333;
    bottom: -18px;
    left: 5px;
    z-index: -1;
  }
}

.box1 {
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  background: #0b2d78;
  border-radius: @radius;
  opacity: 0.8;
  box-shadow: inset 2px 2px 10px 1px #111;
  .title {
    font-size: 24px;
    font-weight: bold;
    position: absolute;
    left: 50%;
    top: 20px;
    transform: translate(-50%, -50%);
    text-shadow: 5px 2px 6px #000;
  }
}
</style>
