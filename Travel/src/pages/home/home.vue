<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data(){
    return{
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  mounted() {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo(){
      axios.get(`${this.$baseUrl}/index.json`)
      .then((result) => {
        console.log(process.env.NODE_ENV)
      const data =result.data.data;
     
      this.swiperList=data.swiperList;
      this.iconList=data.iconList;
      this.recommendList=data.recommendList;
      this.weekendList=data.weekendList;
      }).catch((err) => {
        
      });
    }
  },
}

</script>

<style>

</style>
