<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove"
      @touchend="handleTouchEnd" @click="handleleLetterClick" :ref="item">

      {{item}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "CityAlpabet",
    props: {
      cities: Object
    },
    computed: {
      letters() {
        const letters = [];
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters;
      }
    },
    data() {
      return {
        touchStatus: false,
        startY:0,
        timer:null
      }
    },
    updated() {
        this.startY = this.$refs['A'][0].offsetTop;
    },
    methods: {
      handleleLetterClick(e) {
        this.$emit('change', e.target.innerText)
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        if (this.touchStatus) {
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(()=>{
                const touchY = e.touches[0].clientY - 68;
                const index = Math.floor((touchY - this.startY) / 20)
                if (index >= 0 && index < this.letters.length) {
                  this.$emit("change", this.letters[index])
                }
            },16)
          
         
        }
      },
      handleTouchEnd() {
        this.touchStatus = false;
      }
    },
  }

</script>

<style lang="stylus" scoped>
  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: absolute;
    top: 0.58rem;
    right: 0;
    bottom: 0;
    width: 1.4rem;
  }

  .list .item {
    line-height: 1.44rem;
    text-align: center;
    color: #00bcd4;
  }

</style>
