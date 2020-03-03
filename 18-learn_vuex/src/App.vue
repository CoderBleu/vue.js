<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <h2>{{message}}</h2>
    <!-- modules模块化分离 -->
    <!-- a模块中的name -->
    <h2>{{$store.state.a.name}}</h2>
    <!-- a模块中的getters -->
    <h3>{{$store.getters.fullName}}</h3>
    <!-- 拼接getters值 -->
    <h3>{{$store.getters.fullName2}}</h3>
    <!-- 拼接getters 和 根state下的counter 值 -->
    <h3>{{$store.getters.fullName3}}</h3>
    <button @click="updateName">修改模块内值内容</button>
    <button @click="asyncUpdateName">异步修改模块内的值</button>

    <hr>
    <p>App响应式中的内容</p>
    <h2 @click="updateInfo">{{$store.state.info}}</h2>
    <hr />
    <h2>{{$store.state.counter}}</h2>
    <!-- 这里不建议直接使用：$store.state.counter ++或 --操作 -->
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <!-- 使用vuex中mutations -->
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent()">添加学生</button>

    <!-- 大于20岁 -->
    <h2>{{more20stu}}</h2>
    <!-- 去掉 ：就是传的字符串 -->
    <hello-vuex :counter="counter"></hello-vuex>
    <!-- get的基本使用 -->
    <h2>{{$store.getters.powerCounter}}</h2>
    <!-- 动态传入值 -->
    <h2>{{$store.getters.moreAgeStu(15)}}</h2>
  </div>
</template>

<script>
// export default才能这么import
import HelloWorld from "./components/HelloWorld";
import HelloVuex from "./components/HelloVuex";
import { INCREMENT } from "./store/mutations-types";

export default {
  name: "App",
  components: {
    HelloWorld,
    HelloVuex
  },
  data() {
    return {
      message: "我是App组件"
    };
  },
  methods: {
    addition() {
      // this:vue对象
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit('decrement');
    },
    addCount(count) {
      // payload：负载
      // 1.普通的提交封装
      // this.$store.commit('incrementCount', count)

      // 2.特殊的提交封装
      this.$store.commit({
        type: "incrementCount",
        count
      });
    },
    addStudent() {
      // payload 负载即携带东西，通过mutations
      const stu = { id: 114, name: "Lucy", age: 16 };
      this.$store.commit("addStudent", stu);
    },
    updateInfo() {
      // commit：提交给mutations
      // this.$store.commit('updateInfo', state)

      // dispatch：提交给actions
      // this.$store.dispatch('aUpdateInfo', 整体叫payload)

      // this.$store.dispatch('aUpdateInfo', '我是payload携带的信息')

      // this.$store.dispatch('aUpdateInfo', {
      //   message: '我是payload携带的信息',
      //   success: () => {
      //     console.log('里面已经完成了')
      //   }
      // })

      this.$store
        .dispatch("aUpdateInfo", "我是payload携带的信息")
        .then(res => {
          console.log('里面完成了提交');
          console.log(res);
        })
    },
    updateName() {
      this.$store.commit('updateName', '李四')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  },
  computed: {
    more20stu() {
      return this.$store.state.students.filter(s => s.age >= 20);

      // return this.$store.state.students.filter(s => {
      //   return s.age >= 20
      // })
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
