import {
  INCREMENT
} from './mutations-types'

export default {
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
}