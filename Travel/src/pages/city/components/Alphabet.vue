<template>
   <ul class="list">
       <li class="item">A</li>
       <li class="item">A</li>
       <li class="item">A</li>
       <li class="item">A</li>
       <li class="item">A</li>
       <li class="item">A</li>
   </ul>  
  </template>
  
  <script>
    export default {
      name: "CityAlpabet"
    }
  
  </script>
  
  <style lang="stylus" scoped>
    .list{
        display:flex;
        flex-direction: column;
        justify-content: center;
        
        position: absolute;
        top: 1.58rem;
        right: 0;
        bottom: 0;
        width: 1.4rem;
    }
    .list .item{
        line-height: 1.44rem;
        text-align: center;
        color: #00bcd4;
    }
  </style>
  