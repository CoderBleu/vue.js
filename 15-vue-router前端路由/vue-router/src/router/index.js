// 配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// ES6中懒加载方式：
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')

const HomeMessage = () => import('../components/HomeMessage.vue')
const HomeNews = () => import('../components/HomeNews.vue')

const Profile = () => import('../components/Profile.vue')
// 1.通过Vue.use(插件)，安装插件
Vue.use(Router)

// 2.创建Router对象
const routes = [{
    path: '/',
    redirect: '/home',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/home',
    component: Home,
    // 嵌套路由
    children: [{
        // 配置嵌套路由的默认路径
        path: '',
        redirect: 'news'
      },
      {
        // 官方是不加斜杠
        path: 'message',
        component: HomeMessage
      },
      {
        path: 'news',
        component: HomeNews
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
  },
  {
    // user后带id的方式
    path: '/user/:userId',
    component: User,
    meta: {
      title: '我的'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  // 取消url中后面的 #，变成html5的history模式
  mode: 'history',
  // 这里可以统一简化修改App.vue中template的标签class
  linkActiveClass: 'active'
})

// 前置守卫（guard）：一键修改点击首页后动态修改对应的标题
router.beforeEach((to, from, next) => {
  // 从from到to
  // 获取标题：但是还是有点小问题，第二次打开就是undefined
  document.title = to.matched[0].meta.title
  console.log('title=' + to);
  // 下一步：不加next子组件啥的都没了
  next()
})

// 全局守备
// 后置钩子(hook): 
router.afterEach(route => {
  console.log('hook=' + '+++');
})

// 3.将router对象传入到Vue实例
export default router
