<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息，嘿嘿嘿</p>
    <p>{{$route.params.userId}}</p>
    <p>计算属性：{{finalMessage}}</p>
    <p>{{message}}</p>
    <button @click="btnClick">比较router和route的区别</button>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      message: '动态路由'
    }
  },
  computed: {
    userId() {
      // 获取App.vue中的vue传过来的userId值
      return this.$route.params.userId
    },
    finalMessage() {
      return this.message
    }
  },
  methods: {
    btnClick() {
      // 所有的组件都继承自Vue类的原型
      console.log("router=" + this.$router);
      // Vue.app中的配置的相对应的路由
      console.log("route=" + this.$route);
    }
  },
}
</script>

<style scoped>

</style>