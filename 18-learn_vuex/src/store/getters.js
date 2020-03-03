export default {
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
}