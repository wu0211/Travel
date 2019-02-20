<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
  export default {
    name: "CitySearch"
  }

</script>

<style lang="stylus" scoped>
    .search{
        height: 31px;
        background: #00bcd4;
        padding: 0 3px;
    }
    .search-input{
        width: 100%;
        height: 28px;
        line-height: 28px;
        text-align: center;
        border-radius: .06rem;
        color: #666;
        padding: 0 0.1rem;
        box-sizing: border-box;
    }

</style>
