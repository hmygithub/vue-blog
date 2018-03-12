// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Routes from './routes'
// import Users from './components/Users'
// import HelloWorld from './components/HelloWorld'
// import Home from './components/Home'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

//全局使用
//自定义指令
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color="#" + Math.random().toString().slice(2,8)
//   }
// })

Vue.directive('theme',{
  bind(el,binding,vnode){
   if(binding.value == 'wide'){
     el.style.maxWidth = "1260px"
   }else if(binding.value == 'narrow'){
     el.style.maxWidth = "560px"
  }

  if(binding.arg == 'column'){
    el.style.background='pink'
    el.style.padding='20px'
  }
  }
})
// 自定义过滤器
// Vue.filter("to-uppercase",function(value){
//   return value.toUpperCase()
// })

Vue.filter("snippet",function(value){
  return value.slice(0,100) + "..."
})
//配置路由
const router = new VueRouter({
  routes: Routes,
  mode: 'history'//去掉#
})
/* 全局注册组件 */
//Vue.component("users",Users)

new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
