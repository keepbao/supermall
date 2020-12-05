import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router' 

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

//添加事件总线对象
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)
// 安装element ui
Vue.use(ElementUI);
//解决移动端300ms延迟
FastClick.attach(document.body)
//使用vue-lazyload插件实现图片懒加载
// bug：使用这个插件会导致新款与精选第一页会加载图片数据，但显示的是流行第一页的图片
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/common/placeholder.jpg')
})

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')

