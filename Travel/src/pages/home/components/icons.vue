<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
  export default {
    name: 'HomeIcons',
    props:{
      list:Array
    },
    data() {
      return {
        swiperOption:{
          autoplay:false
        }
      }
    },
    mounted() {
     
     
    },
    created() {
      this.$bus.$on('bus',res=>{
        console.log(res,"中央事件")
      })
    },
    computed: {
      pages() {
        const pages = [];
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          } 
            pages[page].push(item)

        })
        return pages

      }
    },
  }

</script>

<style lang="stylus" scoped>
  @imoprt '~styles/varibles.styl'

  .icons >>>.swiprt-content {
    height: 0;
    padding-bottom: 50%;
  }

  .icon {
    width: 25%;
    height: 0;
    float: left;
    padding-bottom: 25%;
    position: relative;
    margin-top: .1rem;
  }

  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 22px;
    box-sizing: border-box;
    padding: 1px;
  }

  .icon-img-content {
    height: 100%;
    display: block;
    margin: 0 auto;
  }

  .icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 22px;
    line-height: 22px;
    text-align: center;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #333;

  }

</style>
