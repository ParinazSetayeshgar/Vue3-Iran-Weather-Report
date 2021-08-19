<template>
    

      <header>

        <info></info>

        <currentTime></currentTime>

      </header>

      <climate></climate>  

      <footer>
          Developed By Parinaz Setayeshgar
      </footer>

    
</template>

<script>
import info from './components/info.vue';
import currentTime from './components/currentTime.vue';
import climate from './components/climate.vue';
import { mapState } from 'vuex';

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
        'currentHours',
        'currentMinutes',
        'isDayTime'
    ])

  },

  methods: {

    defineBackgroundImage() {

      if (this.isDayTime === true) {

          document.body.className = 'day';

      } else if (this.isDayTime === false) {

            document.body.className = 'night';

      }

    }

  },

  mounted() {
    this.$store.dispatch('getWeather', 'Alborz');
  },

  

  watch: {

    isDayTime() {
        this.defineBackgroundImage();
    }

  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

* {
    font-family: 'Roboto';
    color:whitesmoke;
}

html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}

.day {
  background-color: rgb(100, 181, 237);
}

.night {
  background-color: rgb(117, 121, 132);
}

header {
    display: flex;
    justify-content: space-around;
    align-content: center;
    font-size: 4rem;
    height: 100px;
    padding: 20px;
}

footer {
    text-align: center;
    color: white;
    font-size: 15px;
    font-weight: 700;
    position: fixed;
    bottom: 10px;
    margin: 0;
    padding: 0;
    width: 100%;
}

@media screen and (max-width: 767px) {
    header {
        font-size:3rem;
        flex-direction: column;
        padding: 50px 50px 30px 50px;
    }
}
</style>
