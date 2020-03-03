<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: 'home/news'
    }
  },
  created() {
    // 类似于init()方法，
    console.log('home created');
    // 手动修改网页标题的显示
    document.title = '首页'
  },
  destroyed() {
    console.log('home destoryed');
  },
  // 打开此页面时的操作
  activated() {
    console.log('activated=');
    this.$router.push(this.path);
  },
  // 离开此页面前的操作
  beforeRouteLeave (to, from, next) {
    console.log(this.$route.path);
    // 记录离开时home页面的路径
    this.path = this.$route.path;
    next()
  }
};
</script>

<style scoped>

</style>