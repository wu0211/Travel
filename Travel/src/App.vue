<!-- 单文件组件 -->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    
    <!-- 显示的是当前路由地址所对应的内容 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      alert('手机端')
   }else{
      alert('PC端')
   }
  },
}
</script>

<style>

</style>
