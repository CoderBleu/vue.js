import axios from 'axios'

// 此处不使用defaults，为了能导出多个自定义的
// 强烈推荐：回调方式四：Promise
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1请求拦截
  // instance.interceptors.request.use(config => {
  //   console.log(config);
  //   // 拦截放行，否则报错TypeError: Cannot read property 'cancelToken' of undefined
  //   // 1.比如config中的一些信息不符合服务器的要求
  //   // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
  //   // 3.某些网络请求(比如登录(token))，必须携带一些特殊的信息
  //   return config
  // }, err => {
  //   console.log(err);
  // })
  
  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    return res
  }, err => {
    console.log(err);
  })


  // 底层已经帮我们封装好了new Promise()，我们可以直接return
  return instance(config)
}

// 推荐：回调方式三：Promise
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 1.创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })

//     // 发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

// 回调的方式一：
// export function request(config, success, failure) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       failure(err)
//     })
// }

// 回调的方式二：
// export function request(config) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       failure(err)
//     })
// }
