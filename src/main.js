// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入vue核心文件
import Vue from 'vue'
//引入根组件 可以省略.js后缀 也可以省略.vue
import App from './App'
//引入路由文件
import router from './router'
//引入清除默认样式文件
import './assets/css/reset.css';

import './assets/js/remScale';
//定义中央事件总线 把vue实例化 挂载到vue原型上
Vue.prototype.$Event = new Vue();

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },//注册组件
  template: '<App/>'
})
{/* <App/> 相当于 <App></App> */}
