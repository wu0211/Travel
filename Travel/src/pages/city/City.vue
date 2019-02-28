<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>
<script>
  import axios from 'axios';
  import CityHeader from './components/Header.vue'
  import CitySearch from './components/Search.vue'
  import CityList from './components/List.vue'
  import CityAlphabet from './components/Alphabet.vue'

  export default {
    name: "City",
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet,
      CityAlphabet
    },
    data() {
      return {
        cities: {},
        hotCities: [],
        letter: ''
      }
    },
    mounted() {
      this.getCityInfo()
      console.log(this.$router)
    },
    methods: {
      getCityInfo() {
        axios.get("/api/city.json").then((result) => {
          result = result.data;
          if (result.ret && result.data) {
            const data = result.data;

            this.hotCities = data.hotCities;
            this.cities = data.cities;
          }
        }).catch((err) => {

        });
      },
      handleLetterChange(letter) {
        this.letter = letter;
      }
    },
  }

</script>

<style lang="stylus" scoped>


</style>
