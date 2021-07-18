<template>
  <div class="info">

    <citiesMenu></citiesMenu>

    <div class="today">{{ getDate }}</div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import citiesMenu from './citiesMenu';
export default {

  name: 'info',

  components: {

    citiesMenu

  },

  data() {

    return{
      country: '',
      region: ''
    }
    
  },

  computed: {

    ...mapGetters([
      'getDate'
    ])

  }
  
}
</script>

<style scoped>
.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.today {
    font-size: 1.75rem;
}

@media (min-width: 481px) and (max-width: 767px) {
    .today {
        font-size: 1.25rem;
    }
}
</style>
