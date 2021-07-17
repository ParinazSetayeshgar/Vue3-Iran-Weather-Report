<template>
  <vueCountriesCities @country='selectedCountry = Iran' @city='selectedCity = $event'  />
</template>

<script>
import vueCountriesCities from "vue-countries-cities";
export default {

  name: 'citiesMenu',

  components: { 

    vueCountriesCities

   },

  data () {

      return {
          selectedCountry: 'Iran',
          selectedCity: ''
      }

  },

  
}
</script>