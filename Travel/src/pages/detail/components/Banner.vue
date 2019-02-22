<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1602/67/67feeab24cfc82bb90.water.jpg_600x330_5abf0855.jpg"
        alt="">
      <div class="banner-info">
        <div class="banner-title">太平洋海底世界(AAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>13</div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>

</template>
<script>
  import CommonGallary from 'common/gallary/Gallary.vue'
  export default {
    name: "DetailBanner",
    data() {
      return {
        imgs: [
          "http://img1.qunarzz.com/sight/p0/1501/22/5f7f763c8f341d200a4f467758010332.water.jpg_r_800x800_b54e2572.jpg",
          "http://img1.qunarzz.com/sight/p0/201307/09/9446fc4fe48f052bc8d65eac.jpg_r_800x800_f7cc314a.jpg"
        ],
        showGallary: false
      }
    },
    components: {
      CommonGallary
    },
    methods: {
      handleBannerClick() {
        this.showGallary = true;
      },
      handleGallaryClose() {
        this.showGallary = false;
      }
    },
  }

</script>
<style lang="stylus" scoped>
  .banner {
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    position: relative;
  }

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 1.6rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
  }

  .banner-title {
    flex: 1;
    font-size: .8rem;
    padding: 0 .2rem;

  }

  .banner-number {
    padding: .4rem;
    height: .32rem;
    line-height: .32rem;
    margin-top: .4rem;
    border-radius: .2rem;
    background-color: rgba(0, 0, 0, 0.8);
    font-size: .24rem;
  }

  .banner-icon {
    font-size: .24rem;

  }

</style>
