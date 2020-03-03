<template>
  <div id="app">
    <router-view></router-view>
    <!-- 顶端 -->
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import MainTabBar from "./components/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
