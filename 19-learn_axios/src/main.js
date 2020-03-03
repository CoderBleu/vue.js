import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios的多种请求方式：
// axios(config), axios.request(config), axios.get(url[,config])
// axios.delete(url[, config]), axios.head(url[,config])
// axios.post(url[,data[,config]]), axios.put(url[,data[,config]])
// axios.patch(url[,data[,config]])

// 1.axios基本使用，默认get请求
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
// url: 'http://123.207.32.32:8000/home/data?type=sell&&page=1',
//   params: {
//     type: 'sell',
//     page: 1
//   },
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })

// 2.axios发送并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 4
//   }
// })]).then(results => {
//   // 返回的是数组形式的
//   console.log(results);
// })

// 3.axios公共配置的相关信息
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// 5秒
// axios.defaults.timeout = 5000

// axios.all([axios({
//   // baseURL = 'http://123.207.32.32:8000',
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 4
//   }
//   // spread可以将数组中的元素依次展开
// })]).then(axios.spread((res1, res2) => {
//   // 返回的是数组中的值
//   console.log(res1);
//   console.log(res2);
// }))

// 4.创建对应的axios的实例：可以设置多个不同的baseURL
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000/',
//   timeout: 5000
//   // headers: {}
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// 5.封装request模块
import {
  request
} from "./network/request";

// 回调方式三、四：Promise:推荐
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

// 回调的方式一：
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// 回调的方式二：
// request({
//   baseConfig: {

//   },
//   success: function(res){

//   },
//   failure: function(err){

//   }
// })
