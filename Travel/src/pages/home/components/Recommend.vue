<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
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
    name: "HomeRecommend",
    props:{
      list:Array
    }
  }

</script>

<style lang="stylus" scoped>
  .recommend-title {
    margin-top: 0.2rem;
    line-height: 2.8rem;
    background: #eee;
    text-indent: 0.2rem;
  }

  .item {
    overflow: hidden;
    display: flex;
    height: 3.9rem;
    padding: .1rem;
  }

  .item-img {
    width: 3.7rem;
    height: 3.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
  }

  .item-title {
    line-height: 1.54rem;
    font-size: 1.32rem;
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
