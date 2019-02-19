<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-price">￥{{item.price}}</p>
          <!-- <button class="item-button">查看详情</button> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeWeekend",
    props:{
        list:Array
    }
  }

</script>

<style lang="stylus" scoped>
  .title {
    line-height: 2.8rem;
    background: #eee;
    text-indent: 0.2rem;
  }


  .item.img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;
  }
  .item-img {
   width: 100%;
  }

  .item-info {
    padding: 0.1rem;
  }

  .item-title {
    line-height: 1.54rem;
    font-size: 1.0rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-desc {
    line-height: 1.4rem;
    color: #ccc;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-price {
    color: goldenrod
  }

</style>
