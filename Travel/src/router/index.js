import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import City from '@/pages/city/city'
import Detail from '@/pages/detail/Detail'
Vue.use(Router)

let router = new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

/**
 * 判断是否为移动设备，是，则跳转到移动端的路径
 */
// router.beforeEach((to, from, next) => {
//   if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

//     window.location.href = '/index.html'
//   }
//   next()
// })

export default router
