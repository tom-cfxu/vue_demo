<template>
  <div id="container">
    <div class="header">
      <h1>龙净环保云服务平台</h1>
      <div class="nav">
        <div class="nav-aslide1">
          <router-link to="/home/dashboard">数据展示</router-link>
          <router-link to="/about">趋势图表</router-link>
        </div>
        <div class="nav-aslide2"></div>
        <div class="nav-aslide3">
          <router-link to="/">实时报警</router-link>
          <router-link to="/login">个人中心</router-link>
        </div>
      </div>
      <div class="avatar">
        <el-avatar :src="avatarUrl"></el-avatar>
        <el-dropdown @command="handleCommand" size="mini" trigger="click">
          <span class="el-dropdown-link username">
            admin
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="user-center">个人中心</el-dropdown-item>
            <el-dropdown-item command="logout">注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <div class="main">
      <div class="box">
        <div>
          <router-view class="router-view" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/style/common.css";
export default {
  name: "Layout",
  data() {
    return {
      avatarUrl: "../../assets/img/avator.png"
    };
  },
  methods: {
    handleCommand(e) {
      console.log(e);
    }
  }
};
</script>
 <style lang="less">
@bg-color-1: #101d4e;
@bg-color-2: #0a4aaaa4;
@bg-color-3: #0d38709d;
@device-width: 100%;
@device-height: 100%;
* {
  box-sizing: border-box;
}
body,
html {
  width: @device-width;
  height: @device-height;
}
::-webkit-scrollbar {
  display: none;
}

::-ms-scrollbar {
  display: none;
}
body {
  background-image: url("../../assets/img/container_bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#container {
  display: grid;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  grid-template-rows: 15% 85%;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main";
  h1 {
    line-height: 100%;
  }
  .header {
    position: relative;
    grid-area: header;
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 1fr;
    grid-template-areas:
      "header-title"
      "nav";
    color: #fff;
    background-image: url("../../assets/img/head_bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;

    border: 1px solid @bg-color-1;
    border-bottom: none;
    .nav {
      grid-area: nav;
      display: grid;
      // grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas: "aslide1 aslide2 aslide3";
      .nav-aslide1,
      .nav-aslide2,
      .nav-aslide3 {
        display: flex;
        justify-content: space-around;
        align-items: center;
        a {
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 2.5vh;
          font-weight: bold;
          width: 100%;
          height: 100%;
          &.router-link-exact-active {
            color: #42b983;
          }
        }
      }
      .nav-aslide1 {
        grid-area: aslide1;
      }
      .nav-aslide2 {
        grid-area: aslide2;
      }
      .nav-aslide3 {
        grid-area: aslide3;
      }
    }
    h1 {
      grid-area: header-title;
      font-size: 5vh;
      font-weight: bold;
      position: absolute;
      left: 50%;
      top: 100%;
      transform: translate(-50%, -50%);
    }
    .avatar {
      position: absolute;
      top: 5px;
      right: 10px;
      width: 150px;
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  .username {
    background: #37a38390;
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
  }
  .main {
    grid-area: main;
    display: flex;
    justify-content: center;
    .router-view {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0%;
      top: 0%;
      color: #fff;
    }
  }
}
.box {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  font-size: 1vw;
  justify-content: center;
  border: 1px solid @bg-color-1;
  align-items: center;
  background: #021b7548;
  box-sizing: border-box;
  // filter:blur(8px)
  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    // background: #fff;
    z-index: -1;
    // filter:blur(40px)
  }
  &::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    // background: #fff;
    z-index: -2;
    filter: blur(40px);
  }
  &::before,
  &::after {
    background: linear-gradient(120deg, @bg-color-1, @bg-color-2, @bg-color-3);
  }
}
</style>
