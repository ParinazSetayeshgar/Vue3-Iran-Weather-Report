<template>

  <region-select
    class="region"
    :class="{ menuDayBackground: isDayTime, menuNightBackground: isNightTime }"
    v-model="region"
    :country="country"
    :region="region"
    :regionName="true"
    :removePlaceholder="true" />
  
</template>

<script>
import { mapState } from 'vuex';
import { normalizeDiacritics } from 'normalize-text';
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

  methods: {

    changeRegionName (regionName) {

      switch(regionName) {

        case 'Āz̄arbāyjān-e Gharbī':
          regionName = 'Orūmīyeh';
          break;

        case 'Āz̄arbāyjān-e Sharqī':  
          regionName = 'Tabriz';
          break;

        case 'Sīstān va Balūchestān':
          regionName = 'Zahedan';
          break;

        case 'Chahār Maḩāl va Bakhtīārī':
        case 'Khorāsān-e Jonūbī':
        case 'Khorāsān-e Shomālī':
        case 'Kohgīlūyeh va Bowyer Aḩmad':
        case 'Kordestān':
          regionName = 'Ostān-e ' + regionName;
          break;  

      }

      return normalizeDiacritics(regionName);

    }

  },

  watch: {

    region() {
      console.log(this.region);
      this.$store.dispatch('getWeather', this.changeRegionName(this.region));
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
  cursor: pointer;
}
.region option {
  font-family: 'Roboto';
}
.menuDayBackground:focus {
  background-color: rgb(100, 181, 237);
}
.menuNightBackground:focus {
  background-color: rgb(117, 121, 132);
}
</style>