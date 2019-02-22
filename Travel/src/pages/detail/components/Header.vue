<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailHeader',
    data() {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll() {
        var top = document.documentElement.scrollTop || document.body.scrollTop;
        //console.log(top)
        
        if (top > 60) {
          let opacity = top / 140
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = {
            opacity
          }
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }
    },
    activated() {
     
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll, true)
    },
    unmounted() {
      window.removeEventListener('scroll', this.handleScroll, true)
    }
  }

</script>
<style lang="stylus" scoped>
  .header-abs {
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 1.4rem;
    background: rgba(0, 0, 0, 0.8);
    text-align: center;
    line-height: 1.8rem;
  }

  .header-abs-back {
    color: #fff;
    font-size: .4rem;
  }


  .header-fixed {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    height: 43px;
    line-height: 43px;
    background: #00bcd4;
    font-size: 1.2rem;
    color: #fff;
  }

  .header-fixed-back {
    width: .64rem;
    text-align: center;
    font-size: 20px;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
  }

</style>
