import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
// state不抽离，官方建议
const state = {
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
}

const store = new Vuex.Store({
  // 单一状态树：
  state,
  mutations,
  actions,
  getters : getters,
  // 模块化管理
  // es6写法
  modules: {
    a: moduleA
  }
})

// 3.导出store独享
export default store
