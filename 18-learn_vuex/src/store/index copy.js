import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from './mutations-types'

// 1.安装插件
Vue.use(Vuex)

const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return state.name + '111111'
    },
    fullName2(state, getters) {
      return getters.fullName + '2222'
    },
    fullName3(state, getters, rootState) {
      // rootState根root下
      return getters.fullName2 + rootState.counter
    }
  },
  actions: {
    // 异步修改模块内的值内容
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      }, 1000) 
    }
  }
}

// 2.创建对象
const store = new Vuex.Store({
  // 单一状态树：
  state: {
    counter: 88,
    // 这些属性都会被加入到响应式系统中，而响应式系统会监听属性的变化
    // 当属性发生变化时，会通知所有界面中用到该属性的地方
    students: [{
        id: 110,
        name: 'blue',
        age: 18
      },
      {
        id: 111,
        name: 'james',
        age: 24
      },
      {
        id: 112,
        name: 'curry',
        age: 19
      },
      {
        id: 113,
        name: 'tom',
        age: 21
      },
    ],
    info: {
      name: 'blue',
      age: 18,
      height: 1.75
    }
  },
  mutations: {
    // 方法
    // 通过commit提交
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // App中addCount方法传过来的
    incrementCount(state, payload) {
      // 普通封装传的是 值
      // console.log(count);

      console.log(payload);
      state.counter += payload.count
    },
    // App中的addStudent添加学生
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      state.info.name = 'Blue'
      // 错误的代码：
      // setTimeOut属于异步操作，devtools不能跟踪到信息修改，如要用的话就要中间增加action环节，类似于mutations
      // setTimeout(() => {
      //   state.info.name = 'Blue'
      // }, 1000)

      // state.info['address'] = '洛杉矶'
      // set：将手动添加的内容变成响应式的
      // Vue.set(state.info, 'address', '洛杉矶')

      // 此方法做不到响应式 
      // delete state.info.age
      // 此方法可
      // Vue.delete(state.info, 'age')
    }
  },
  actions: {
    // context：上下文，也类似于store
    // 通过dispatch提交
    // aUpdateInfo(context, payload) {
    //   console.log('payload：' + payload)
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    //     // 回调函数
    //     payload.success()
    //   }, 1000)
    // }
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            context.commit('updateInfo')
            console.log('payload：' + payload)

            resolve('123456')
          }, 1000)
      })
    }
  },
  getters: {
    // 类似于computed
    powerCounter(state) {
      return state.counter * state.counter
    },
    moreAgeStu(state) {
      return age => {
        return state.students.filter(s => s.age > age)
      }

      // return function (age) {
      //   return state.students.filter(s => s.age >= age)
      // }
    }
  },
  // 模块化管理
  modules: {
    a: moduleA
  }
})

// 3.导出store独享
export default store
