<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
      </router-link>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader',
    props: {
      city: String
    }
  }

</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';

  .header {
    line-height: 43px;
    display: flex;
    color: #fff;
    background: #00bcd4;
  }

  .header-left {
    width: 30px;
    float: left;

  }

  .back-icon {
    text-align: center;
    font-size: 20px;
  }

  .header-input {
    background: #fff;
    border-radius: 5px;
    margin-top: 6px;
    height: 32px;
    margin-left: 4px;
    flex: 1;
    color: #ccc;
    line-height: 32px;
    padding-left: 4px;
  }

  .header-right {
    width: 62px;
    float: right;
    text-align: center;
    color: #fff;
  }

  .arrow-icon {
    margin-left: -2px;
    font-size: 12px;
  }

</style>
