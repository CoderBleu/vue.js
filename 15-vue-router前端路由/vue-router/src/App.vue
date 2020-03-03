<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <!-- 1.
      to:跳转到的路径，tag：要渲染成的标签，replace：不能通过浏览器的箭头返回页面，即不保留history记录 
      active-class="active"：去掉路由匹配成功后增加的router-link-exact-active前缀，变成active
      router-link: 默认情况下被渲染成 a 标签
    -->
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->
    <!--  2.   
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link> -->
    <!--  3.自定义按钮点击事件 -->
    <button @click="toHome">首页</button>
    <button @click="toAbout">关于</button>
    <!-- <button @click="toUser">我的</button> v-bind:to=""-->

    <!-- 参数的传递方式：to="'/user/'+userId"-->
    <!-- <router-link tag="button" v-bind:to="'/user/'+userId">我的</router-link> -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!-- <router-link tag="button" :to="{path: '/profile', query: {name: 'blue', height: 1.78,
      age: 18}}">档案</router-link> -->

    <!-- 始终保留,不被销毁：也才能使用activated/deactivated -->
    <!-- 任何匹配的组件都不会被缓存：即能被频繁的创建和销毁，不会让keep-alive生效 -->
    <keep-alive exclude="Profile,About">
      <!-- router-view作为占位的，决定我们的具体内容显示在哪里
      里面不需要跟其他标签元素，可以这么写 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsan'
    }
  },
  methods: {
    toHome() {
      // 通过代码的方式修改路由 vue-router
      // push => pushState,即不会使用html5的history模式
      // this.$router.push('/home')

      // 解决：不让其返回历史上页面
      this.$router.replace('/home')
      console.log('toHome');
    },
    toAbout() {
      // this.$router.push('/about')
      this.$router.replace('/about')
      console.log('toAbout');
    },
    toUser() {
      // this.$router.push('/about')
      this.$router.replace('/user')
      console.log('toUser');
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 19,
          height: 1.87
        }
      })
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul>li {
  color: #2c6521;
  list-style: none;
}
</style>
