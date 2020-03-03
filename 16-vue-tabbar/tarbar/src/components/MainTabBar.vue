<template>
  <tab-bar>
      <!-- 每个区域展示内容 -->
      <tab-bar-item path="/home">
        <img slot="item-icon" src="../assets/img/tabbar/首页.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/首页-选中.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#d32b48">
        <img slot="item-icon" src="../assets/img/tabbar/分类.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/分类-选中.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="../assets/img/tabbar/购物车.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/购物车-选中.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/我的.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/我的-选中.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
// 配置别名：components，若不在import中前面需要加 ~ ,
// 别名配置在webpack.base.conf.js文件的alias中，完成后需要重启项目
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>>

</style>