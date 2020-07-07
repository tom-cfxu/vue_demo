<template>
  <div id="container">
    <div class="header">
      <h1>龙净环保云服务平台</h1>
      <div class="nav">
        <div class="nav-aslide1">
          <router-link to="/home/dashboard">数据展示</router-link>
          <router-link to="/home/charts">趋势图表</router-link>
        </div>
        <div class="nav-aslide2"></div>
        <div class="nav-aslide3">
          <router-link to="/home/alarm">实时报警</router-link>
          <router-link to="/home/usercenter">个人中心</router-link>
        </div>
      </div>
      <div class="avatar">
        <!-- <el-avatar :src="avatarUrl"></el-avatar> -->
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
        <transition :name="SkipSwitchName">
          <router-view class="router-view" />
        </transition>
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
      SkipSwitchName: ""
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta.tx < from.meta.tx) {
        this.SkipSwitchName = "Skright";
      } else {
        this.SkipSwitchName = "Skleft";
      }
    }
  },
  methods: {
    handleCommand(e) {
      switch (e) {
        case "logout":
          this.$router.push({ path: "/" });
          this.$message({
            message: `注销成功!`,
            type: "info",
            center: true
          });
          break;
        case "user-center":
          this.$router.push({ path: "/home/usercenter" });
      }
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
          width: 40%;
          height: 60%;
          text-shadow: 2px 2px 10px #000;
          user-select: none;
          &.router-link-exact-active {
            color: #42b983;
            // background-color: #ddd;
            transition: all 0.5s ease-out;
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
      text-shadow: 5px 2px 6px #000;
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Chrome/Safari/Opera */
      -khtml-user-select: none; /* Konqueror */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none;
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
    background: #1ea3ed;
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 10px;
    opacity: 0.8;
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
  .Skright-enter-active,
  .Skright-leave-active,
  .Skleft-enter-active,
  .Sklef-leave-active {
    transition: all 600ms;
  }
  .Skright-enter {
    transform: translate3d(-100%, 0, 0);
  }
  .Skright-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  .Skleft-enter {
    transform: translate3d(100%, 0, 0);
  }
  .Skleft-leave-to {
    transform: translate3d(-100%, 0, 0);
  }
}
@media screen and (max-width: 900px) {
  .header {
    background: #fff;
    h1 {
      font-size: 4vw !important;
    }
    .nav a {
      font-size: 2vw !important;
    }
  }
}
</style>
