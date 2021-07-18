<template>

  <region-select
    class="region"
    :class="{ menuDayBackground: isDayTime, menuNightBackground: isNightTime }"
    v-model="region"
    :country="country"
    :region="region" />
  
</template>

<script>
import { mapState } from 'vuex';
export default {

  name: 'citiesMenu',

  data () {

      return {
        country: 'IR',
        region: ''
      }

  },

  computed: {

    ...mapState([
        'isDayTime',
        'isNightTime'
    ])

  },

  watch: {

    region() {
      this.$store.dispatch('getWeather', this.region);
    }

  }

  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

.region {
  background-color: transparent;
  height: 100%;
  text-align-last: center;
  border: 0 transparent;
  outline: 0;
  color:whitesmoke;
  font-size:2rem;
  font-family: 'Roboto';
  appearance: none;
}
.menuDayBackground:focus {
  background-color: rgb(100, 181, 237);
}
.menuNightBackground:focus {
  background-color: rgb(117, 121, 132);
}
</style>