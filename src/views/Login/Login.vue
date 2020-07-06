<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="login-header">龙净环保云服务平台</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">x</el-button> -->
      </div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名:">
          <el-input
            :disabled="loading"
            v-model="form.name"
            placeholder="admin"
            suffix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input
            :disabled="loading"
            v-model="form.password"
            :type="flag?'text':'password'"
            placeholder="admin"
            :change="onSubmit"
          >
            <i
              @click="flag =!flag"
              slot="suffix"
              :class="!flag?'pwd-view el-icon-lock':'pwd-view el-icon-unlock'"
            ></i>
          </el-input>
        </el-form-item>
        <el-button
          :disabled="form.name==''||form.password==''"
          :loading="loading"
          class="btn"
          type="primary"
          @click="onSubmit"
        >登录</el-button>
      </el-form>
    </el-card>
    <div class="copyRight">
      <span>福建龙净环保股份有限公司Copyright©2018 All rights reserved.闽ICP备11017676号-3</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      loading: false,
      form: {
        name: "",
        password: ""
      }
    };
  },
  components: {},
  methods: {
    onSubmit() {
      this.loading = true;
      const formdata = this.form;
      if (formdata.name == "admin" && formdata.password == "admin") {
        this.$message({
          message: `登录成功!`,
          type: "success",
          center: true
        });
        this.loading = false;
        this.$router.push("/home");
      } else {
        this.loading = false;
        this.$message({
          message: `用户名或密码错误`,
          type: "error",
          center: true
        });
      }
    }
  },
  mounted() {},
  created() {}
};
</script>

<style lang="less">
::-webkit-scrollbar {
  display: none;
}

::-ms-scrollbar {
  display: none;
}
body {
  background: url("../../assets/img/container_bg.jpg") no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.text {
  font-size: 14px;
}
.pwd-view {
  position: absolute;
  top: 12px;
  right: 10px;
  cursor: pointer;
}
.item {
  margin-bottom: 18px;
}
.el-card {
  background: #eee;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn {
  width: 100%;
}
.login-header {
  font-size: 20px;
  font-weight: bold;
}
.copyRight {
  color: #5c5c5c;
  position: absolute;
  bottom: 30px;
}
</style>