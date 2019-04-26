// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import store from './store/index'
import bus from '../static/bus'
import ElementUI from 'element-ui'

import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
// eslint-disable-next-line eqeqeq
Vue.prototype.$baseUrl = process.env.NODE_ENV === 'production' ? '/static/mock' : '/api'
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.prototype.$bus = bus
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

// 路由：根据网址的不同，返回不同的页面给用户
