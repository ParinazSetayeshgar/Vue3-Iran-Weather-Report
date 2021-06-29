<template>
    <div>

      <header>

        <info></info>

        <currentTime></currentTime>

      </header>

      <climate></climate>  

      <footer>
          Developed By Parinaz Setayeshgar
      </footer>

    </div>
</template>

<script>
import info from './components/info.vue';
import currentTime from './components/currentTime.vue';
import climate from './components/climate.vue'
import { mapGetters, mapState } from 'vuex';

export default {

  name: 'App',

  components: {

    info,
    currentTime,
    climate

  },

  computed: {

    ...mapState([
        'sunsetHours',
        'sunsetMinutes',
        'isDayTime'
    ]),

    ...mapGetters([
        'getcurrentHours',
        'getcurrentMinutes',
    ])

  },

  methods: {

    defineBackgroundImage() {

      if (this.getcurrentHours < this.sunsetHours) {

          document.body.className = 'day';

      } else if (this.getcurrentHours == this.sunsetHours) {

        if (this.getcurrentMinutes < this.sunsetMinutes) {

            document.body.className = 'day';

        } else {

            document.body.className = 'night';

        }

      } else {

          document.body.className = 'night';

      }

    }

  },

  mounted() {
    this.$store.dispatch('getWeather');
  },

  

  watch: {

    sunsetMinutes() {
        this.defineBackgroundImage();
    },

    sunsetMinutess() {
        this.defineBackgroundImage();
    }

  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

* {
    font-family: 'Roboto';
    margin: 0;
    padding: 0;
    color: whitesmoke;
}

html {
    height: 100%;
    overflow: auto;
}

body {
    min-height: 100vh ;
    position: relative;
}

.day {
    background-image: url('./assets/day.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
}

.night {
    background-image: url('./assets/night.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
}

header {
    display: flex;
    justify-content: space-around;
    font-size: 4rem;
    height: 100px;
    padding: 20px;
}

footer {
    text-align: center;
    color: white;
    font-size: 15px;
    font-weight: 700;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1.5rem; 
}

@media (min-width: 481px) and (max-width: 767px) {
    header {
        font-size:3rem;
    }
}
</style>
