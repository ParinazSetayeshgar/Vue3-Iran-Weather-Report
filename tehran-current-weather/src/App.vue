<template>
  <div>

    <header>

      <info :date="date"></info>

      <currentTime :date="date"></currentTime>
    
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

export default {

  name: 'App',

  computed: {
    
    date() {
      let currentDate = new Date();
      return currentDate.toString().split(" ");
    }

  },

  components: {

    info,
    currentTime,
    climate

  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

* {
    font-family: 'Roboto';
    margin: 0;
    padding: 0;
    color: black;
}

html {
    height: 100%;
    overflow: auto;
}

body {
    min-height: 100vh ;
    position: relative;
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
