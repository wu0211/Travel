<template>
  <div class="header">
    城市选择器
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "CityHeader"
  }

</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';

  .header {
    overflow: hidden;
    text-align: center;
    height: 43px;
    line-height: 43px;
    background: #00bcd4;
    font-size: 1.4rem;
    color: #fff;
    position: relative;
  }

  .header-back {
    width: .64rem;
    text-align: center;
    font-size: 20px;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
  }

</style>
