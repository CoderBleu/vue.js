export default {
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
}