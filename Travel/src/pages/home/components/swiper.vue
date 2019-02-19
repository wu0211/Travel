<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
name: "HomeSwiper",
data() {
    return {
    swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
    },
    swiperList: [{
        id: "0001",
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/70/5603e6a535062402.jpg_750x200_2c552f2c.jpg'
    }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1812/d1/cd4f32e924a5a302.jpg_750x200_3d492837.jpg'
    }]
    }
    }
}

</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active {
      
      background: #fff !important;
  }

  .wrapper {
    width: 100%;
    height: 0;
    overflow: hidden;
    background: #eee;
    padding-bottom: 27%;
  }

  .swiper-img {
    width: 100%;
  }

</style>
