<template>
  <el-container class="main">
    <el-header height="5vh">
      <div class="navi">
        <el-row type="flex" align="center">
          <el-col :offset="4" :span="8">
            <el-row type="flex" justify="start">
              <el-col :span="3">首页</el-col>
              <el-col :span="3">分类</el-col>
              <el-col :span="3">话题</el-col>
            </el-row>
          </el-col>
          <el-col :span="8">
            <el-row type="flex" justify="end">
              <el-col :span="3">登录</el-col>
              <el-col :span="3">注册</el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <el-container>
      <el-aside width="30vh">Aside</el-aside>
      <el-container>
        <el-main>
          <keep-alive include="list">
            <transition name="fade">
              <router-view />
            </transition>
          </keep-alive>
          <el-backtop target=".el-main">
            <i class="el-icon-caret-top"></i>
          </el-backtop>
        </el-main>
        <el-footer height="5vh">Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less">
@import "../assets/styles/home/home.less";
</style>
