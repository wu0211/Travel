<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'
  import axios from 'axios'
  export default {
    name: "Detail",
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data() {
      return {
        list: [{
          title: '成人票'
        }, {
          title: '学生票'
        }, {
          title: '儿童票'
        }, {
          title: '特惠票'
        }]
      }
    },
    activated() {

    },
    mounted() {
      this.getDetailInfo()
    },
    methods: {
      getDetailInfo() {
       // axios.get('/api/detail.json?id=' + this.$route.params.id).then((result) => {

        //}).catch((err) => {

        //});
        axios.get('/api/detail.json',{
          params:{
            id:this.$route.params.id
          }
        }).then((result) => {
            console.log(result)
        }).catch((err) => {
          
        });
      }
    },
  }

</script>

<style lang="stylus" scoped>
  .content {
    height: 50rem;
  }

</style>
